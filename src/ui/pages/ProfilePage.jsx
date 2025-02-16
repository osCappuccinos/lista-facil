import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  auth, 
  db 
} from '../../../firebase';
import { 
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword 
} from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, getDoc, updateDoc, collection, addDoc } from 'firebase/firestore';
import {
  CircleUser,
  ArrowLeft,
  Download,
  Trash2,
  KeyRound,
} from 'lucide-react';
import BottomNavigation from '../components/BottomNavigation';

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

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDocRef = doc(db, 'users', user.uid);
        try {
          const docSnap = await getDoc(userDocRef);
          if (docSnap.exists()) {
            const userData = docSnap.data();
            setUserName(userData.nome || 'Usuário');
            setUserData(userData);
            if(userData.photoUrl){
              setProfilePhoto(userData.photoUrl);
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

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      console.log('O evento beforeinstallprompt não está disponível.');
      return;
    }
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(outcome === 'accepted'
      ? 'Usuário aceitou o prompt de instalação'
      : 'Usuário rejeitou o prompt de instalação');
    setDeferredPrompt(null);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChangePasswordOpenModal = () => {
    setIsChangePasswordModalOpen(true);
    setIsModalOpen(false);
  };

  const handleChangePasswordCloseModal = () => {
    setIsChangePasswordModalOpen(false);
  };

  const handleChangePassword = async () => {
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
      handleChangePasswordCloseModal();
    } catch (error) {
      setErrorMessage("Erro ao alterar senha: " + error.message);
      console.error("Erro ao alterar senha:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleProfilePhotoChange = async (e) => {
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
  };

  // Handles the file import for notes (e.g., from a CSV file)
  const handleImportNotesFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
  
    try {
      const text = await file.text();
      // A simple CSV parser example: each row represents a note with title and content separated by commas.
      const rows = text.split('\n').filter(row => row.trim() !== '');
      const notes = rows.map((row) => {
        const [title, content] = row.split(',');
        return { title: title?.trim(), content: content?.trim() };
      });
  
      // Assuming you have a "notes" collection in Firestore
      const notesCollectionRef = collection(db, 'notes');
      for (const note of notes) {
        // Customize validation logic as needed.
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
  };

  // Trigger file selection for importing notes
  const handleImportNotesClick = () => {
    importNotesFileInputRef.current.click();
  };
  

  return (
    <div className="w-screen h-screen bg-white px-6" style={{ fontFamily: 'Calibri' }}>
      <div className="mt-20 w-full max-w-4xl mx-auto">
        <div className="mt-10 flex flex-col items-center justify-center md:flex-row md:space-x-8">
          <div
            onClick={() => fileInputRef.current.click()}
            className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer"
          >
            {profilePhoto ? (
              <img
                src={profilePhoto}
                alt="Perfil"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <CircleUser size={60} className="text-gray-500" />
            )}
          </div>
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
              <button className="!bg-transparent focus:outline-none" onClick={handleOpenModal}>
                Dados de acesso
              </button>
            </li>
            <li className="flex items-center text-gray-700">
              <Download className="mr-2" size={20} />
              <button className="!bg-transparent focus:outline-none" onClick={handleImportNotesClick}>
                Importar notas
              </button>
              {/* Hidden input for importing notes */}
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

        {/* Modal de dados de acesso */}
        {isModalOpen && (
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
                        onClick={handleChangePasswordOpenModal}
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
                    onClick={handleCloseModal}
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {isChangePasswordModalOpen && (
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
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Confirmar Nova Senha"
                    className="w-full px-4 py-2 border border-[#CFD8DC] rounded-lg focus:outline-none focus:border-[#BF360C]"
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                  />
                </div>
                <div className="mt-6 space-y-3">
                  <button
                    className="border border-[#BF360C] text-[#BF360C] py-2 px-6 rounded-lg w-full text-[14px] bg-white cursor-pointer transition-colors duration-300 focus:outline-none"
                    onClick={handleChangePassword}
                    disabled={loading}
                  >
                    {loading ? 'Alterando...' : 'Salvar Nova Senha'}
                  </button>
                  <button
                    className="border border-[#BF360C] text-[#BF360C] py-2 px-6 rounded-lg w-full text-[14px] bg-white cursor-pointer transition-colors duration-300 focus:outline-none"
                    onClick={handleChangePasswordCloseModal}
                    disabled={loading}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <BottomNavigation />
      </div>
    </div>
  );
};

export default ProfilePage;