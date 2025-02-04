import React, { useEffect, useState } from "react";
import { auth, db } from "../../../firebase";
import { collection, query, where, getDocs, doc, deleteDoc, updateDoc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
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

  const exportarParaWhatsApp = () => {
    if (listas.length === 0) {
      alert("Nenhuma lista para exportar.");
      return;
    }
    // For example, export the first list in the array
    const { titulo, itens } = listas[0];
    const listaTexto = itens.map(item =>
      `Nome: ${item.nome}, Categoria: ${item.categoria}, Preço: ${item.preco}, Quantidade: ${item.quantidade}`
    ).join('\n');
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(titulo + '\n\n' + listaTexto)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-white px-6" style={{ fontFamily: 'Calibri' }}>
      {/* Cabeçalho fixo - estilo unificado */}
      <header className="fixed top-5 left-0 right-0 bg-white px-6 py-2 flex justify-between items-center z-10">
        <div className="flex-1">
          <h1 className="text-[24px] font-semibold text-[#656565]">
            Olá, {userName}
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <button 
            className="w-10 h-10 flex items-center justify-center bg-white text-[#656565] rounded-lg focus:outline-none"
            onClick={exportarParaWhatsApp}
          >
            📤
          </button>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <div className="pt-20">
        <h2 className="text-lg font-medium text-[#656565] mb-4">Todas as listas</h2>

        {/* Grid de Listas */}
        <div className="grid grid-cols-1 gap-4">
          {listas.length === 0 ? (
            <p className="text-center text-[#656565] mt-6">Nenhuma lista encontrada</p>
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
      </div>

      {/* Barra de Navegação Inferior - estilo unificado */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#CFD8DC] flex justify-around items-center h-16">
        <button 
          className="flex flex-col items-center text-[#656565] hover:text-[#BF360C] transition-colors"
          onClick={() => navigate("/home")}
        >
          <span className="text-2xl">📋</span>
          <span className="text-xs mt-1">Listas</span>
        </button>
        
        <button
          onClick={() => navigate("/new-list")}
          className="bg-[#BF360C] text-grey rounded-full p-3 shadow-lg -translate-y-6 hover:bg-red-700 transition-colors"
        >
          <span className="text-2xl">+</span>
        </button>
        
        <button 
          className="flex flex-col items-center text-[#656565] hover:text-[#BF360C] transition-colors"
          onClick={() => navigate("/profile")}
        >
          <span className="text-2xl">👤</span>
          <span className="text-xs mt-1">Perfil</span>
        </button>
      </div>
    </div>
  );
};

export default Home;