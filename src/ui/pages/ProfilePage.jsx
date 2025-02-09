import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../../firebase';
import { doc, getDoc } from 'firebase/firestore';
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

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/login');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      {/* Perfil */}
      <div className="mt-10 flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
          <CircleUser size={60} className="text-gray-500" />
        </div>
        <h2 className="text-green-600 mt-2 text-lg font-semibold">{userName}</h2>
      </div>

      {/* Opções */}
      <div className="w-full max-w-xs mt-6">
        <ul className="space-y-4">
          <li className="flex items-center text-gray-700">
            <KeyRound className="mr-2" size={20} />
            <button>Dados de acesso</button>
          </li>
          <li className="flex items-center text-gray-700">
            <Download className="mr-2" size={20} />
            <button>Importar notas</button>
          </li>
          <li className="flex items-center text-gray-700">
            <Trash2 className="mr-2" size={20} />
            <button>Lixeira</button>
          </li>
          <li className="flex items-center text-red-500">
            <ArrowLeft className="mr-2" size={20} />
            <button onClick={handleLogout}>Sair</button>
          </li>
        </ul>
      </div>

      {/* Banner */}
      <div className="mt-8 bg-white rounded-lg shadow-md p-4 max-w-xs w-full border border-red-400">
        <h3 className="text-red-500 font-semibold text-sm">Baixe o Lista Fácil</h3>
        <p className="text-gray-600 text-xs mt-1">
          Tenha acesso às suas listas de forma simples mesmo sem internet
        </p>
        <button className="mt-3 w-full border border-red-500 text-red-500 py-1 rounded text-sm">
          Quero baixar
        </button>
      </div>

      {/* Barra inferior */}
           
        <BottomNavigation />
      </div>
  );
};

export default ProfilePage;
