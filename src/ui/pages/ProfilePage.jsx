import React, { useEffect, useState, useRef, useCallback, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../../firebase';
import { 
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword 
} from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, getDoc, updateDoc, collection, addDoc } from 'firebase/firestore';
import {
  ArrowLeft,
  Download,
  Trash2,
  KeyRound
} from 'lucide-react';
import BottomNavigation from '../components/BottomNavigation';

const AccessModal = memo(({ userData, onClose, onChangePasswordOpen }) => (
  <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto flex items-center justify-center p-4">
    <div className="bg-white rounded-lg shadow-md w-full max-w-xs md:max-w-sm p-6">
      <div className="text-center">
        <h3 className="text-lg font-medium text-[#666666] mb-4">Dados de Acesso</h3>
        <div className="text-[#666666] space-y-2">
          {userData ? (
            <>
              <p>Nome: {userData.nome}</p>
              <p>Email: {userData.email}</p>
              <button
                className="border border-[#BF360C] text-[#BF360C] py-2 px-6 rounded-lg w-full text-[14px] bg-white cursor-pointer transition-colors duration-300 focus:outline-none"
                onClick={onChangePasswordOpen}
              >
                Alterar Senha
              </button>
            </>
          ) : (
            <p>Carregando dados...</p>
          )}
        </div>
        <div className="mt-6">
          <button
            className="border border-[#BF360C] text-[#BF360C] py-2 px-6 rounded-lg w-full text-[14px] bg-white cursor-pointer transition-colors duration-300 focus:outline-none"
            onClick={onClose}
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  </div>
));

const ChangePasswordModal = memo(({
  passwordError,
  successMessage,
  errorMessage,
  newPassword,
  confirmNewPassword,
  loading,
  onNewPasswordChange,
  onConfirmNewPasswordChange,
  onSave,
  onCancel
}) => (
  <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto flex items-center justify-center p-4">
    <div className="bg-white rounded-lg shadow-md w-full max-w-xs md:max-w-sm p-6">
      <div className="text-center">
        <h3 className="text-lg font-medium text-[#333333] mb-4">
          Alterar Senha
        </h3>
        {passwordError && <p className="text-red-500 mb-4 text-sm">{passwordError}</p>}
        {successMessage && <p className="text-green-500 mb-4 text-sm">{successMessage}</p>}
        {errorMessage && <p className="text-red-500 mb-4 text-sm">{errorMessage}</p>}
        <div className="space-y-3">
          <input
            type="password"
            placeholder="Nova Senha"
            className="w-full px-4 py-2 border border-[#CFD8DC] rounded-lg focus:outline-none focus:border-[#BF360C]"
            value={newPassword} 
            onChange={onNewPasswordChange}
          />
          <input
            type="password"
            placeholder="Confirmar Nova Senha"
            className="w-full px-4 py-2 border border-[#CFD8DC] rounded-lg focus:outline-none focus:border-[#BF360C]"
            value={confirmNewPassword}
            onChange={onConfirmNewPasswordChange}
          />
        </div>
        <div className="mt-6 space-y-3">
          <button
            className="border border-[#BF360C] text-[#BF360C] py-2 px-6 rounded-lg w-full text-[14px] bg-white cursor-pointer transition-colors duration-300 focus:outline-none"
            onClick={onSave}
            disabled={loading}
          >
            {loading ? 'Alterando...' : 'Salvar Nova Senha'}
          </button>
          <button
            className="border border-[#BF360C] text-[#BF360C] py-2 px-6 rounded-lg w-full text-[14px] bg-white cursor-pointer transition-colors duration-300 focus:outline-none"
            onClick={onCancel}
            disabled={loading}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  </div>
));

const ProfilePage = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [userData, setUserData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);
  const fileInputRef = useRef(null);
  const importNotesFileInputRef = useRef(null);

  // Buscar os dados do usuário
  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDocRef = doc(db, 'users', user.uid);
        try {
          const docSnap = await getDoc(userDocRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setUserName(data.nome || 'Usuário');
            setUserData(data);
            if (data.photoUrl) {
              setProfilePhoto(data.photoUrl);
            }
          }
        } catch (error) {
          console.error('Erro ao carregar dados:', error);
        }
      } else {
        navigate('/login');
      }
    };

    fetchUserData();
  }, [navigate]);

  // Handler para before install prompt
  useEffect(() => {
    const beforeInstallPromptHandler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      console.log('beforeinstallprompt event captured');
    };

    window.addEventListener('beforeinstallprompt', beforeInstallPromptHandler);
    return () => {
      window.removeEventListener('beforeinstallprompt', beforeInstallPromptHandler);
    };
  }, []);

  const handleLogout = useCallback(async () => {
    try {
      await auth.signOut();
      navigate('/');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  }, [navigate]);

  const handleInstallClick = useCallback(async () => {
    if (!deferredPrompt) {
      console.log('O evento beforeinstallprompt não está disponível.');
      return;
    }
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(
      outcome === 'accepted'
        ? 'Usuário aceitou o prompt de instalação'
        : 'Usuário rejeitou o prompt de instalação'
    );
    setDeferredPrompt(null);
  }, [deferredPrompt]);

  const openAccessModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeAccessModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const openChangePasswordModal = useCallback(() => {
    setIsChangePasswordModalOpen(true);
    setIsModalOpen(false);
  }, []);

  const closeChangePasswordModal = useCallback(() => {
    setIsChangePasswordModalOpen(false);
  }, []);

  const handleChangePassword = useCallback(async () => {
    setPasswordError("");
    setSuccessMessage("");
    setErrorMessage("");
    setLoading(true);

    if (!newPassword || !confirmNewPassword) {
      setPasswordError("Todos os campos são obrigatórios");
      setLoading(false);
      return;
    }

    if (newPassword.length < 6) {
      setPasswordError("A senha deve ter pelo menos 6 caracteres");
      setLoading(false);
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setPasswordError("As senhas não coincidem");
      setLoading(false);
      return;
    }

    try {
      const user = auth.currentUser;
      if (!user) {
        setErrorMessage("Usuário não autenticado.");
        setLoading(false);
        return;
      }

      const oldPassword = prompt("Digite sua senha atual para confirmar:");
      if (!oldPassword) {
        setErrorMessage("Reautenticação cancelada.");
        setLoading(false);
        return;
      }

      const credential = EmailAuthProvider.credential(user.email, oldPassword);
      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, newPassword);

      setSuccessMessage("Senha alterada com sucesso!");
      setNewPassword("");
      setConfirmNewPassword("");
      closeChangePasswordModal();
    } catch (error) {
      setErrorMessage("Erro ao alterar senha: " + error.message);
      console.error("Erro ao alterar senha:", error);
    } finally {
      setLoading(false);
    }
  }, [newPassword, confirmNewPassword, closeChangePasswordModal]);

  const handleProfilePhotoChange = useCallback(async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const storage = getStorage();
      const storageRef = ref(storage, `profilePhotos/${auth.currentUser.uid}`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      setProfilePhoto(downloadURL);
      await updateDoc(doc(db, 'users', auth.currentUser.uid), { photoUrl: downloadURL });
    } catch (error) {
      console.error("Erro ao fazer upload da foto:", error);
    }
  }, []);

  const handleImportNotesFileChange = useCallback(async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const text = await file.text();
      const rows = text.split('\n').filter(row => row.trim() !== '');
      const notes = rows.map((row) => {
        const [title, content] = row.split(',');
        return { title: title?.trim(), content: content?.trim() };
      });

      const notesCollectionRef = collection(db, 'notes');
      for (const note of notes) {
        if (note.title && note.content) {
          await addDoc(notesCollectionRef, {
            ...note,
            userId: auth.currentUser.uid,
            createdAt: new Date()
          });
        }
      }
      alert('Notas importadas com sucesso!');
    } catch (error) {
      console.error("Erro ao importar notas:", error);
      alert('Erro ao importar notas. Verifique o arquivo e tente novamente.');
    }
  }, []);

  const handleImportNotesClick = useCallback(() => {
    importNotesFileInputRef.current?.click();
  }, []);

  return (
    <div className="w-screen h-screen bg-white px-6" style={{ fontFamily: 'Calibri' }}>
      <div className="mt-20 w-full max-w-4xl mx-auto">
        <div className="mt-10 flex flex-col items-center justify-center md:flex-row md:space-x-8">
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleProfilePhotoChange}
            className="hidden"
          />
          <h2 className="text-green-600 mt-2 md:mt-0 text-lg font-semibold">{userName}</h2>
        </div>

        <div className="w-full max-w-sm md:max-w-md mt-6 mx-auto">
          <ul className="space-y-4">
            <li className="flex items-center text-gray-700">
              <KeyRound className="mr-2" size={20} />
              <button className="!bg-transparent focus:outline-none" onClick={openAccessModal}>
                Dados de acesso
              </button>
            </li>
            <li className="flex items-center text-gray-700">
              <Download className="mr-2" size={20} />
              <button className="!bg-transparent focus:outline-none" onClick={handleImportNotesClick}>
                Importar notas
              </button>
              <input
                type="file"
                accept=".txt"
                ref={importNotesFileInputRef}
                onChange={handleImportNotesFileChange}
                className="hidden"
              />
            </li>
            <li className="flex items-center text-gray-700">
              <Trash2 className="mr-2" size={20} />
              <button 
                className="!bg-transparent focus:outline-none"
                onClick={() => navigate('/trash')}
              >
                Lixeira
              </button>
            </li>
            <li className="flex items-center text-red-500">
              <ArrowLeft className="mr-2" size={20} />
              <button className="!bg-transparent focus:outline-none" onClick={handleLogout}>
                Sair
              </button>
            </li>
          </ul>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-md p-4 max-w-sm md:max-w-md w-full border border-red-400 mx-auto">
          <h3 className="text-red-500 font-semibold text-sm">Baixe o Lista Fácil</h3>
          <p className="text-gray-600 text-xs mt-1">
            Tenha acesso às suas listas de forma simples mesmo sem internet
          </p>
          <button
            onClick={handleInstallClick}
            className="mt-3 w-full border border-red-500 text-red-500 py-1 rounded text-sm focus:outline-none"
          >
            Quero baixar
          </button>
        </div>

        {isModalOpen && (
          <AccessModal 
            userData={userData} 
            onClose={closeAccessModal} 
            onChangePasswordOpen={openChangePasswordModal}
          />
        )}

        {isChangePasswordModalOpen && (
          <ChangePasswordModal
            passwordError={passwordError}
            successMessage={successMessage}
            errorMessage={errorMessage}
            newPassword={newPassword}
            confirmNewPassword={confirmNewPassword}
            loading={loading}
            onNewPasswordChange={(e) => setNewPassword(e.target.value)}
            onConfirmNewPasswordChange={(e) => setConfirmNewPassword(e.target.value)}
            onSave={handleChangePassword}
            onCancel={closeChangePasswordModal}
          />
        )}

        <BottomNavigation />
      </div>
    </div>
  );
};

export default ProfilePage;