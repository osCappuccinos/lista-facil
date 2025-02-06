import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { auth, db } from "../../../firebase";
import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import AddItem from "../components/AddItem";
import EditItem from "../components/EditItem";
import { ArrowLeft, Share, Trash2, Plus, Check } from "lucide-react";

const ListPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [titulo, setTitulo] = useState("Nova Lista");
  const [isEditingTitle, setIsEditingTitle] = useState(false);
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

  const salvarTitulo = async () => {
    if (!id || !auth.currentUser) return;

    const listaRef = doc(db, "listas", id);
    await setDoc(listaRef, { titulo }, { merge: true });

    setIsEditingTitle(false); // Sai do modo de edição após salvar
  };

  return (
    <div className="w-screen h-screen bg-white px-6" style={{ fontFamily: 'Calibri' }}>
      <header className="fixed top-5 left-0 right-0 bg-white px-6 py-2 flex justify-between items-center z-10">
        <button
          className="w-10 h-10 flex items-center justify-center bg-white text-[#656565] rounded-lg focus:outline-none"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft color="red" />
        </button>
        <h1
          className="text-[18px] font-semibold text-[#00000088] cursor-pointer pl-5"
          onClick={() => setIsEditingTitle(true)}
        >
          {isEditingTitle ? (
            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              onBlur={salvarTitulo}
              onKeyDown={(e) => e.key === "Enter" && salvarTitulo()}
              autoFocus
              className="rounded px-2 py-1 w-auto focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
            />
          ) : (
            titulo
          )}
        </h1>
        <div className="flex items-center space-x-4">
          <button
            className="w-10 h-10 flex items-center justify-center bg-white text-[#656565] rounded-lg focus:outline-none"
            onClick={exportarParaWhatsApp}
          >
            <Share color="#00000088" />
          </button>
          <button
            className="w-10 h-10 flex items-center justify-center bg-white text-[#656565] rounded-lg focus:outline-none"
            onClick={deleteList}
          >
            <Trash2 color="#CF1322" />
          </button>
        </div>
      </header>

      <div className="pt-20">
        <div className="flex justify-center gap-4 mb-4">
          <button
            onClick={() => setFiltro("todos")}
            className={`mt-4 w-35 py-2 px-6 text-center rounded-4xl transition-colors duration-300 text-[14px] font-medium ${filtro === "todos"
              ? "bg-[#2E7D32] text-[#FFFFFF]"
              : "border border-[#2E7D32] text-[#2E7D32] bg-white"
              }`}
          >
            Todos os itens
          </button>
          <button
            onClick={() => setFiltro("comprados")}
            className={`mt-4 w-35 py-2 px-6 text-center rounded-4xl transition-colors duration-300 text-[14px] font-medium ${filtro === "comprados"
              ? "bg-[#2E7D32] text-grey"
              : "border border-[#2E7D32] text-[#2E7D32] bg-white"
              }`}
          >
            Comprados
          </button>
        </div>
        {itens.length === 0 ? (
          <p className="text-center text-[#00000045] mt-6">Nenhum item cadastrado</p>
        ) : (
          <ul className="mt-4 space-y-2">
            {itens.map((item, index) => (
              <li
                key={index}
                className="p-2 border border-[#CFD8DC] rounded-md flex items-center gap-3"
                onDoubleClick={() => handleEditItem(item)}
              >
                <button
                  onClick={async () => {
                    const novosItens = [...itens];
                    novosItens[index].comprado = !novosItens[index].comprado;
                    setItens(novosItens);
                    const listaRef = doc(db, "listas", id);
                    await setDoc(listaRef, { itens: novosItens }, { merge: true });
                  }}
                  className={`w-5 h-5 flex items-center justify-center border-2 rounded-md transition-all duration-200 ${item.comprado
                      ? "bg-[#66BB6A] border-[#66BB6A]"
                      : "bg-white border-gray-300"
                    }`}
                >
                  {item.comprado && <Check className="w-5 h-5 text-white" />}
                </button>

                <span className="text-gray-700">{item.nome}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="fixed bottom-4 left-0 right-0 flex justify-center drop-shadow-xl">
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
            onClick={() => setIsAddModalOpen(true)}
            className="mt-4 bg-[#FBE9E7] text-[#BF360C] py-2 px-6 rounded-lg w-full text-[14px cursor-pointer transition-colors duration-300"
          >
            <div class="flex justify-center items-center gap-1 font-semibold" >
              <Plus />
              Adicionar item
            </div>
          </button>
          <button
            onClick={salvarLista}
            className="mt-4 border border-[#BF360C] text-[#BF360C] py-2 px-6 rounded-lg w-full text-[14px] bg-white cursor-pointer transition-colors duration-300"
          >
            Salvar Lista
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