import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { auth, db } from "../../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import AddItem from "../components/AddItem"; // Importando o modal correto

const ListPage = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // ID da lista (se for edição)
  const [titulo, setTitulo] = useState("Nova Lista");
  const [itens, setItens] = useState([]);
  const [filtro, setFiltro] = useState("todos");
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado do modal de adicionar item
  const [listId, setListId] = useState(id); // Controlar o ID da lista

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

    // Salvar a lista no Firebase
    await setDoc(listaRef, {
      uid: user.uid,
      titulo,
      itens,
      total: itens.reduce((sum, item) => sum + (item.preco || 0), 0),
    });

    navigate("/home");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-white px-4 pt-6">
      {/* Cabeçalho */}
      <div className="w-full max-w-md flex justify-between items-center mb-4">
        <button className="text-gray-600 text-xl" onClick={() => navigate(-1)}>←</button>
        <h1 className="text-gray-800 text-lg font-semibold">{titulo}</h1>
        <div className="flex gap-4">
          <button className="text-gray-500 text-xl">📤</button>
          <button className="text-gray-500 text-xl">🗑</button>
        </div>
      </div>

      {/* Filtros */}
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

      {/* Lista de Itens */}
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
              <input
                type="checkbox"
                checked={item.comprado}
                onChange={() => {
                  const novosItens = [...itens];
                  novosItens[index].comprado = !novosItens[index].comprado;
                  setItens(novosItens);
                }}
              />
            </li>
          ))}
        </ul>
      )}

      {/* Rodapé */}
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

          {/* Botão Salvar Lista */}
          <button
            onClick={salvarLista}
            className="w-full flex justify-center items-center mt-4 bg-green-600 text-white font-semibold py-3 rounded-lg"
          >
            Salvar Lista
          </button>

          {/* Botão Adicionar Item */}
          <button
            onClick={() => setIsModalOpen(true)} // Abre o modal ao clicar
            className="w-full flex justify-center items-center mt-2 bg-gray-100 text-gray-700 font-semibold py-3 rounded-lg border border-gray-300"
          >
            + Adicionar item
          </button>
        </div>
      </div>

      {/* Modal para adicionar itens (usando o correto) */}
      {isModalOpen && (
        <AddItem
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          listId={listId}
          setListId={setListId}
          setItens={setItens}
        />
      )}
    </div>
  );
};

export default ListPage;
