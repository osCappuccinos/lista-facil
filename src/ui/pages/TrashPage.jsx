import React, { useEffect, useState } from 'react';
import { db, auth } from '../../../firebase';
import { collection, query, where, getDocs, deleteDoc, doc, setDoc } from 'firebase/firestore';
import { ArrowLeft, RefreshCcw, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../components/BottomNavigation';

const TrashPage = () => {
  const [trashedLists, setTrashedLists] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadTrashedLists();
  }, []);

  const loadTrashedLists = async () => {
    try {
      const user = auth.currentUser;
      if (!user) {
        navigate('/login');
        return;
      }

      const q = query(
        collection(db, 'trash'),
        where('userId', '==', user.uid)
      );

      const querySnapshot = await getDocs(q);
      const lists = [];
      querySnapshot.forEach((doc) => {
        lists.push({ id: doc.id, ...doc.data() });
      });
      setTrashedLists(lists);
    } catch (error) {
      console.error('Erro ao carregar listas da lixeira:', error);
    }
  };

  const handleRestore = async (list) => {
    try {
      // Restaurar para a coleção de listas sem o campo deletedAt
      const { deletedAt, ...listData } = list;
      await setDoc(doc(db, 'listas', list.id), listData);
  
      // Remover da lixeira
      await deleteDoc(doc(db, 'trash', list.id));
      
      // Atualizar a lista local
      setTrashedLists(prev => prev.filter(l => l.id !== list.id));
      
      // Feedback visual (você pode implementar um toast ou alert)
      alert('Lista restaurada com sucesso!');
    } catch (error) {
      console.error('Erro ao restaurar lista:', error);
      alert('Erro ao restaurar lista. Tente novamente.');
    }
  };
  
  const handleDelete = async (listId) => {
    if (window.confirm('Deseja excluir permanentemente esta lista?')) {
      try {
        await deleteDoc(doc(db, 'trash', listId));
        setTrashedLists(prev => prev.filter(list => list.id !== listId));
      } catch (error) {
        console.error('Erro ao excluir permanentemente:', error);
      }
    }
  };

  return (
    <div className="w-screen min-h-screen bg-white px-6">
      <div className="pt-20 w-full max-w-4xl mx-auto">
        <div className="flex items-center mb-6">
          <button 
            onClick={() => navigate('/profile')} 
            className="text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="ml-4 text-xl font-semibold text-gray-800">Lixeira</h1>
        </div>

        {trashedLists.length === 0 ? (
          <div className="text-center mt-10 text-gray-500">
            <Trash2 size={48} className="mx-auto mb-4 opacity-50" />
            <p>Nenhuma lista na lixeira</p>
          </div>
        ) : (
          <div className="space-y-4">
            {trashedLists.map((list) => (
              <div key={list.id} className="border rounded-lg p-4 hover:border-gray-300">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-gray-800">{list.titulo}</h3>
                    <span className="text-sm text-gray-500">
                      Excluído em: {new Date(list.deletedAt).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleRestore(list)}
                      className="p-2 text-green-600 hover:bg-green-50 rounded-full transition-colors"
                      title="Restaurar"
                    >
                      <RefreshCcw size={20} />
                    </button>
                    <button
                      onClick={() => handleDelete(list.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                      title="Excluir permanentemente"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <BottomNavigation />
      </div>
    </div>
  );
};

export default TrashPage;