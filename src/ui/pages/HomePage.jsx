import React, { useEffect, useState } from "react";
import { auth, db } from "../../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import ListaCard from "../components/ListCard";

const Home = () => {
  const [listas, setListas] = useState([]);
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

  return (
    <div className="flex flex-col items-center min-h-screen bg-white px-4 py-6 relative">
      {/* Cabeçalho */}
      <div className="w-full max-w-md flex justify-between items-center">
        <h1 className="text-green-600 text-xl font-bold">Olá, Severo</h1>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 text-lg">🔍</button>
          <button className="text-gray-600 text-lg">📥</button>
        </div>
      </div>
      <p className="text-gray-600 mt-2 self-start text-lg font-medium">Todas as listas</p>
      
      {/* Grid de Listas */}
      <div className="w-full max-w-md grid grid-cols-2 gap-4 mt-4">
        {listas.length === 0 ? (
          <div className="col-span-2 text-center text-gray-500">Nenhuma lista encontrada</div>
        ) : (
          listas.map((lista) => (
            <ListaCard 
              key={lista.id} 
              id={lista.id} 
              titulo={lista.titulo} 
              itens={lista.itens || []} 
              total={parseFloat(lista.total) || 0} 
            />
          ))
        )}
      </div>

      {/* Barra de Navegação */}
      <div className="fixed bottom-0 w-full max-w-md bg-white flex justify-around p-4 border-t shadow-lg">
        <button className="text-green-600 text-sm font-semibold flex flex-col items-center">
          <span className="text-lg">📋</span>
          Minhas listas
        </button>
        <button
          onClick={() => navigate("/new-list")}
          className="bg-green-600 text-white p-4 rounded-full shadow-md flex items-center justify-center text-lg"
        >
          ✏️
        </button>
        <button onClick={() => navigate("/profile")} className="text-gray-600 text-sm font-semibold flex flex-col items-center">
          <span className="text-lg">👤</span>
          Perfil
        </button>
      </div>
    </div>
  );
};

export default Home;
