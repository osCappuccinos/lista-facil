import React, { useState, useEffect } from "react";
import { 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  arrayUnion, 
  collection, 
  getDocs 
} from "firebase/firestore";
import { db, auth } from "../../../firebase";

const AddItemModal = ({ isOpen, onClose, listId, setListId, setItens, itemUid }) => {
  const [categoria, setCategoria] = useState("");
  const [item, setItem] = useState("");
  const [valorUnitario, setValorUnitario] = useState("0");
  const [quantidade, setQuantidade] = useState(1);
  const [categorias, setCategorias] = useState([]);
  const [itensSugeridos, setItensSugeridos] = useState([]);
  const [valorTotal, setValorTotal] = useState(0);
  const [editando, setEditando] = useState(false);

  useEffect(() => {
    const fetchCategorias = async () => {
      const categoriasSnapshot = await getDocs(collection(db, "categorias"));
      const lista = categoriasSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCategorias(lista);
    };
    fetchCategorias();
  }, []);

  useEffect(() => {
    if (categoria) {
      const catEscolhida = categorias.find(cat => cat.nome === categoria);
      if (catEscolhida && catEscolhida.itens) {
        const sugestoes = catEscolhida.itens.split(',').map(item => item.trim());
        setItensSugeridos(sugestoes);
      } else {
        setItensSugeridos([]);
      }
    } else {
      setItensSugeridos([]);
    }
  }, [categoria, categorias]);

  useEffect(() => {
    setValorTotal(quantidade * valorUnitario);
  }, [quantidade, valorUnitario]);

  useEffect(() => {
    const buscarItem = async () => {
      if (itemUid && listId) {
        const listaRef = doc(db, "listas", listId);
        const listaSnap = await getDoc(listaRef);

        if (listaSnap.exists()) {
          const itens = listaSnap.data().itens || [];
          const itemEncontrado = itens.find((it) => it.uid === itemUid);

          if (itemEncontrado) {
            setItem(itemEncontrado.nome);
            setValorUnitario(itemEncontrado.preco);
            setQuantidade(itemEncontrado.quantidade);
            setEditando(true);
          }
        }
      }
    };

    if (isOpen) {
      buscarItem();
    }
  }, [isOpen, itemUid, listId]);

  const adicionarItem = async () => {
    if (!item.trim() || isNaN(parseFloat(valorUnitario))) return;
  
    const user = auth.currentUser;
    if (!user) return;
  
    try {
      // If quantity is 0 and we're editing, remove the item
      if (quantidade === 0 && editando) {
        if (listId.startsWith('temp-')) {
          // Remove from temporary list
          setItens(prevItens => prevItens.filter(item => item.uid !== itemUid));
        } else {
          // Remove from saved list
          const listaRef = doc(db, "listas", listId);
          const listaSnap = await getDoc(listaRef);
  
          if (listaSnap.exists()) {
            const listaAtual = listaSnap.data();
            const novosItens = listaAtual.itens.filter(item => item.uid !== itemUid);
  
            await updateDoc(listaRef, {
              itens: novosItens,
              total: novosItens.reduce((sum, item) => 
                sum + (item.preco * item.quantidade), 0
              ),
            });
  
            setItens(novosItens);
          }
        }
  
        // Reset form and close
        setItem("");
        setCategoria("");
        setValorUnitario("0");
        setQuantidade(1);
        setEditando(false);
        onClose();
        return;
      }
  
      // Add or update item
      const novoItem = {
        uid: editando ? itemUid : crypto.randomUUID(),
        nome: item,
        categoria: categoria,
        preco: parseFloat(valorUnitario) || 0,
        quantidade,
        comprado: false,
      };
  
      if (listId.startsWith('temp-')) {
        // For temporary lists - update state directly
        setItens(prevItens => {
          if (editando) {
            // Replace existing item
            return prevItens.map(item => 
              item.uid === itemUid ? novoItem : item
            );
          }
          // Add new item
          return [...prevItens, novoItem];
        });
      } else {
        // For saved lists - update Firestore
        const listaRef = doc(db, "listas", listId);
        const listaSnap = await getDoc(listaRef);
  
        if (listaSnap.exists()) {
          const listaAtual = listaSnap.data();
          let novosItens;
  
          if (editando) {
            // Replace existing item in array
            novosItens = listaAtual.itens.map(item =>
              item.uid === itemUid ? novoItem : item
            );
          } else {
            // Add new item to array
            novosItens = [...(listaAtual.itens || []), novoItem];
          }
  
          // Update document with new array and total
          await updateDoc(listaRef, {
            itens: novosItens,
            total: novosItens.reduce((sum, item) => 
              sum + (item.preco * item.quantidade), 0
            ),
          });
  
          // Update local state to reflect changes
          setItens(novosItens);
        }
      }
  
      // Reset form
      setItem("");
      setCategoria("");
      setValorUnitario("0");
      setQuantidade(1);
      setEditando(false);
      onClose();
    } catch (error) {
      console.error("Erro ao adicionar/editar item:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center" style={{ fontFamily: 'Calibri' }}>
      <div className="absolute inset-0 bg-black opacity-80" onClick={onClose}></div>

      <div className="relative bg-white p-6 rounded-lg w-11/12 max-w-md text-black">
        <div className="h-1 w-12 bg-gray-400 mx-auto rounded-full mb-4"></div>

        <label className="block text-sm text-gray-600">Selecione uma categoria</label>
        <select
          className="w-full p-2 border rounded mt-1"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="">Selecione</option>
          {categorias.map((cat, index) => (
            <option key={index} value={cat.nome}>{cat.nome}</option>
          ))}
        </select>

        <label className="block text-sm text-gray-600 mt-4">Informe o item</label>
        {itensSugeridos.length > 0 ? (
          <select
            className="w-full p-2 border rounded mt-1"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          >
            <option value="">Selecione</option>
            {itensSugeridos.map((sugestao, idx) => (
              <option key={idx} value={sugestao}>{sugestao}</option>
            ))}
          </select>
        ) : (
          <input
            type="text"
            className="w-full p-2 border rounded mt-1"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        )}

        <label className="block text-sm text-gray-600 mt-4">Valor unitário</label>
        <input
        type="number"
        min="0"
        step="0.01"
        className="w-full p-2 border rounded mt-1 bg-white text-gray-600"
        value={valorUnitario}
        onChange={(e) => {
          const value = parseFloat(e.target.value);
          if (!isNaN(value) && value >= 0) {
            setValorUnitario(value.toString());
          } else if (e.target.value === '') {
            setValorUnitario('0');
          }
        }}
        onBlur={() => {
          if (valorUnitario === '' || isNaN(parseFloat(valorUnitario))) {
            setValorUnitario('0');
          }
        }}
        placeholder="0"
      />

<div className="flex items-center justify-between mt-4">
  <label className="block text-sm text-gray-600">Quantidade</label>
  <div className="flex items-center mt-1 bg-[#FBE9E7] h-7 w-21 rounded-md">
    <button 
      className={`p-2 text-gray rounded ${!editando && quantidade <= 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={() => setQuantidade(prev => Math.max(editando ? 0 : 1, prev - 1))}
      disabled={!editando && quantidade <= 1}
      title={editando ? "Definir como 0 para remover o item" : ""}
    >
      -
    </button>
    <span className="px-4 text-black">{quantidade}</span>
    <button 
      className="p-2 text-gray rounded"
      onClick={() => setQuantidade(prev => prev + 1)}
    >
      +
    </button>
  </div>
  {editando && quantidade === 0 && (
    <span className="text-xs text-red-600 absolute -bottom-5 right-0">
      Salvar com 0 irá remover o item
    </span>
  )}
</div>

        <button
          className="w-full mt-6 bg-[#BF360C] text-gray p-3 rounded-md text-white font-semibold"
          onClick={adicionarItem}
        >
          {editando ? "Salvar Alterações" : "Adicionar"}
        </button>

        <hr className="my-4" />
        <div className="text-center text-[#00000065] text-sm font-semibold text-[14px]">Resumo da lista</div>
        <div className="flex justify-between text-gray-600 text-sm mt-2 font-medium">
          <p>Quantidade Total</p>
          <p>{quantidade}</p>
        </div>
        <div className="flex justify-between font-medium text-gray-800 text-lg text-[14px]">
          <p>Valor Total</p>
          <p className="font-bold text-black text-[16px]">R$ {valorTotal.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default AddItemModal;
