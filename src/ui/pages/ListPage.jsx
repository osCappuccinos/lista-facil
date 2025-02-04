import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { auth, db } from "../../../firebase";
import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import AddItem from "../components/AddItem";
import EditItem from "../components/EditItem";

const ListPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [titulo, setTitulo] = useState("Nova Lista");
  const [itens, setItens] = useState([]);
  const [filtro, setFiltro] = useState("todos");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [listId, setListId] = useState(id);
  const [itemToEdit, setItemToEdit] = useState(null);

  useEffect(() => {
    const fetchLista = async () => {
      if (!id) return;
      const listaRef = doc(db, "listas", id);
      const docSnap = await getDoc(listaRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setTitulo(data.titulo);
        setItens(data.itens || []);
      }
    };
    fetchLista();
  }, [id]);

  const salvarLista = async () => {
    const user = auth.currentUser;
    if (!user) return;
    const listaRef = doc(db, "listas", id || `${user.uid}-${Date.now()}`);
    await setDoc(listaRef, {
      uid: user.uid,
      titulo,
      itens,
      total: itens.reduce((sum, item) => sum + (item.preco || 0), 0),
    });
    navigate("/home");
  };

  const handleEditItem = (item) => {
    setItemToEdit(item);
    setIsEditModalOpen(true);
  };

  const updateItem = (updatedItem) => {
    const updatedItens = itens.map((item) =>
      item.nome === updatedItem.nome ? updatedItem : item
    );
    setItens(updatedItens);
  };

  const deleteList = async () => {
    const listaRef = doc(db, "listas", id);
    await deleteDoc(listaRef);
    navigate("/home");
  };

  const exportarParaWhatsApp = () => {
    if (itens.length === 0) {
      alert("Nenhum item para exportar.");
      return;
    }
    const listaTexto = itens.map(item =>
      `Nome: ${item.nome}, Categoria: ${item.categoria}, Preço: ${item.preco}, Quantidade: ${item.quantidade}`
    ).join('\n');
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(titulo + '\n\n' + listaTexto)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-white px-6">
      {/* Cabeçalho - similar ao estilo da HomePage e LoginPage */}
      <header className="fixed top-5 left-0 right-0 bg-white px-6 py-2 flex justify-between items-center z-10">
        <button 
          className="w-10 h-10 flex items-center justify-center bg-white text-[#656565] rounded-lg focus:outline-none" 
          onClick={() => navigate(-1)}
        >
          ←
        </button>
        <h1 className="text-[24px] font-semibold text-[#656565]">{titulo}</h1>
        <div className="flex items-center space-x-4">
          <button 
            className="w-10 h-10 flex items-center justify-center bg-white text-[#656565] rounded-lg focus:outline-none" 
            onClick={exportarParaWhatsApp}
          >
            📤
          </button>
          <button 
            className="w-10 h-10 flex items-center justify-center bg-white text-[#656565] rounded-lg focus:outline-none" 
            onClick={deleteList}
          >
            🗑
          </button>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <div className="pt-20">
      <div className="flex justify-center gap-4 mb-4">
  <button
    onClick={() => setFiltro("todos")}
    className={`mt-4 w-28 py-2 px-6 text-center rounded-lg transition-colors duration-300 text-sm font-medium ${
      filtro === "todos"
        ? "bg-[#656565] text-grey"
        : "border border-[#BF360C] text-[#BF360C] bg-white"
    }`}
  >
    Todos os itens
  </button>
  <button
    onClick={() => setFiltro("comprados")}
    className={`mt-4 w-28 py-2 px-6 text-center rounded-lg transition-colors duration-300 text-sm font-medium ${
      filtro === "comprados"
        ? "bg-[#656565] text-grey"
        : "border border-[#BF360C] text-[#BF360C] bg-white"
    }`}
  >
    Comprados
  </button>
</div>
        {itens.length === 0 ? (
          <p className="text-center text-gray-500 mt-6">Nenhum item cadastrado</p>
        ) : (
          <ul className="mt-4 space-y-2">
            {itens.map((item, index) => (
              <li
                key={index}
                className="p-2 border border-[#CFD8DC] rounded-md flex justify-between items-center"
              >
                <span className="text-gray-700">{item.nome}</span>
                <div className="flex items-center gap-2">
                  <button 
                    className="w-8 h-8 flex items-center justify-center bg-white text-[#656565] rounded-lg focus:outline-none" 
                    onClick={() => handleEditItem(item)}
                  >
                    ✏️
                  </button>
                  <input
                    type="checkbox"
                    checked={item.comprado}
                    onChange={() => {
                      const novosItens = [...itens];
                      novosItens[index].comprado = !novosItens[index].comprado;
                      setItens(novosItens);
                    }}
                  />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Cartão de resumo e ações, com estilo similar à HomePage/ LoginPage */}
      <div className="fixed bottom-4 left-0 right-0 flex justify-center">
  <div className="bg-white rounded-xl p-4 w-11/12 max-w-md">
    <div className="flex justify-between text-gray-600 text-sm">
      <p>Quantidade Total</p>
      <p>{itens.length.toString().padStart(4, "0")}</p>
    </div>
    <div className="flex justify-between font-semibold text-gray-800 text-sm">
      <p>Valor Total</p>
      <p>R$ {itens.reduce((sum, item) => sum + (item.preco || 0), 0).toFixed(2)}</p>
    </div>
    <button
      onClick={salvarLista}
      className="mt-4 border border-[#BF360C] text-[#BF360C] py-2 px-6 rounded-lg w-72 text-[14px] bg-white cursor-pointer transition-colors duration-300"
    >
      Salvar Lista
    </button>
    <button
      onClick={() => setIsAddModalOpen(true)}
      className="mt-4 border border-[#BF360C] text-[#BF360C] py-2 px-6 rounded-lg w-72 text-[14px] bg-white cursor-pointer transition-colors duration-300"
    >
      + Adicionar item
    </button>
  </div>
</div>

      {isAddModalOpen && (
        <AddItem
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          listId={listId}
          setListId={setListId}
          setItens={setItens}
        />
      )}

      {isEditModalOpen && (
        <EditItem
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          item={itemToEdit}
          listId={listId}
          setItens={setItens}
        />
      )}
    </div>
  );
};

export default ListPage;