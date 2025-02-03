import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { auth, db } from "../../../firebase";
import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import AddItem from "../components/AddItem";
import EditItem from "../components/EditItem"; // Importe o componente EditItem

const ListPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [titulo, setTitulo] = useState("Nova Lista");
  const [itens, setItens] = useState([]);
  const [filtro, setFiltro] = useState("todos");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // Estado do modal de edição
  const [listId, setListId] = useState(id);
  const [itemToEdit, setItemToEdit] = useState(null); // Estado do item a ser editado

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
    const listaTexto = itens.map(item => 
      `Nome: ${item.nome}, Categoria: ${item.categoria}, Preço: ${item.preco}, Quantidade: ${item.quantidade}`
    ).join('\n');

    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(titulo + '\n\n' + listaTexto)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-white px-4 pt-6">
      <div className="w-full max-w-md flex justify-between items-center mb-4">
        <button className="text-gray-600 text-xl" onClick={() => navigate(-1)}>←</button>
        <h1 className="text-gray-800 text-lg font-semibold">{titulo}</h1>
        <div className="flex gap-4">
          <button className="text-gray-500 text-xl" onClick={exportarParaWhatsApp}>📤</button>
          <button className="text-gray-500 text-xl" onClick={deleteList}>🗑</button>
        </div>
      </div>

      <div className="w-full max-w-md flex justify-center gap-4">
        <button
          className={`px-4 py-2 rounded-full text-white ${
            filtro === "todos" ? "bg-gray-700" : "border border-gray-500 text-gray-500"
          }`}
          onClick={() => setFiltro("todos")}
        >
          Todos os itens
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            filtro === "comprados" ? "border border-gray-500 text-gray-500" : "bg-white"
          }`}
          onClick={() => setFiltro("comprados")}
        >
          Comprados
        </button>
      </div>

      {itens.length === 0 ? (
        <p className="text-gray-500 mt-6">Nenhum item cadastrado</p>
      ) : (
        <ul className="w-full max-w-md mt-4 space-y-2">
          {itens.map((item, index) => (
            <li
              key={index}
              className="p-2 border border-gray-200 rounded-lg flex justify-between items-center"
            >
              <span>{item.nome}</span>
              <div>
                <button onClick={() => handleEditItem(item)}>✏️</button>
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

      <div className="fixed bottom-4 left-0 w-full flex justify-center">
        <div className="bg-white shadow-lg rounded-xl p-4 w-11/12 max-w-md">
          <div className="flex justify-between text-gray-600">
            <p>Quantidade Total</p>
            <p>{itens.length.toString().padStart(4, "0")}</p>
          </div>
          <div className="flex justify-between font-semibold text-gray-800">
            <p>Valor Total</p>
            <p>R$ {itens.reduce((sum, item) => sum + (item.preco || 0), 0).toFixed(2)}</p>
          </div>

          <button
            onClick={salvarLista}
            className="w-full flex justify-center items-center mt-4 bg-green-600 text-white font-semibold py-3 rounded-lg"
          >
            Salvar Lista
          </button>

          <button
            onClick={() => setIsAddModalOpen(true)}
            className="w-full flex justify-center items-center mt-2 bg-gray-100 text-gray-700 font-semibold py-3 rounded-lg border border-gray-300"
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