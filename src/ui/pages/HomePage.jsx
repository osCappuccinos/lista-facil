import React, { useEffect, useState } from "react";
import { auth, db } from "../../../firebase";
import { collection, query, where, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { getDoc } from 'firebase/firestore';
import ListaCard from "../components/ListCard";

const Home = () => {
  const [listas, setListas] = useState([]);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLists = async () => {
      const user = auth.currentUser;
      if (!user) return;

      const listasRef = collection(db, "listas");
      const q = query(listasRef, where("uid", "==", user.uid));
      const querySnapshot = await getDocs(q);

      const listasData = [];
      querySnapshot.forEach((doc) => {
        listasData.push({ id: doc.id, ...doc.data() });
      });

      setListas(listasData);
    };

    fetchLists();
  }, []);

  useEffect(() => {
    const fetchUserName = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          setUserName(userDoc.data().nome);
        }
      }
    };

    fetchUserName();
  }, []);

  const editList = async (id, newTitle) => {
    const listRef = doc(db, "listas", id);
    await updateDoc(listRef, { titulo: newTitle });
    setListas((prevListas) =>
      prevListas.map((lista) => (lista.id === id ? { ...lista, titulo: newTitle } : lista))
    );
  };

  const deleteList = async (id) => {
    const listRef = doc(db, "listas", id);
    await deleteDoc(listRef);
    setListas((prevListas) => prevListas.filter((lista) => lista.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      {/* Cabeçalho */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Olá, {userName}</h1>
        <div className="flex space-x-2">
          <button className="bg-gray-200 p-2 rounded">🔍</button>
          <button className="bg-gray-200 p-2 rounded">📥</button>
        </div>
      </div>
      <p className="text-lg font-medium text-gray-600 mb-4">Todas as listas</p>
      
      {/* Grid de Listas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {listas.length === 0 ? (
          <div className="text-center text-gray-500 col-span-2">
            Nenhuma lista encontrada
          </div>
        ) : (
          listas.map((lista) => (
            <ListaCard 
              key={lista.id} 
              id={lista.id} 
              titulo={lista.titulo} 
              itens={lista.itens || []} 
              total={parseFloat(lista.total) || 0} 
              onEdit={editList}
              onDelete={deleteList}
            />
          ))
        )}
      </div>

      {/* Barra de Navegação */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow p-4 flex justify-around">
        <button className="text-green-600 text-sm font-semibold flex flex-col items-center">
          <span className="text-xl">📋</span>
          Minhas listas
        </button>
        <button
          onClick={() => navigate("/new-list")}
          className="bg-green-500 text-white p-4 rounded-full shadow-lg"
        >
          ✏️
        </button>
        <button onClick={() => navigate("/profile")} className="text-gray-600 text-sm font-semibold flex flex-col items-center">
          <span className="text-xl">👤</span>
          Perfil
        </button>
      </div>
    </div>
  );
};

export default Home;