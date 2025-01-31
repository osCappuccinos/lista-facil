import React, { useState } from "react";
import { doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db, auth } from "../../../firebase";

const AddItemModal = ({ isOpen, onClose, listId, setListId, setItens }) => {
  const [categoria, setCategoria] = useState("");
  const [item, setItem] = useState("");
  const [valorUnitario, setValorUnitario] = useState(0);
  const [quantidade, setQuantidade] = useState(0);

  const adicionarItem = async () => {
    if (!item.trim() || isNaN(parseFloat(valorUnitario)) || quantidade <= 0) return;
    
    const user = auth.currentUser;
    if (!user) return;
    
    const novoItem = {
      nome: item,
      preco: parseFloat(valorUnitario),
      quantidade,
      comprado: false,
    };
    
    let listaRef;
    let listaExistente = listId;
    
    if (!listId) {
      listaExistente = `${user.uid}-${Date.now()}`;
      setListId(listaExistente);
      listaRef = doc(db, "listas", listaExistente);
      await setDoc(listaRef, {
        uid: user.uid,
        titulo: "Nova Lista",
        itens: [novoItem],
        total: parseFloat(valorUnitario) * quantidade,
      });
    } else {
      listaRef = doc(db, "listas", listId);
      const listaSnap = await getDoc(listaRef);
      
      if (listaSnap.exists()) {
        await updateDoc(listaRef, {
          itens: arrayUnion(novoItem),
          total: listaSnap.data().total + parseFloat(valorUnitario) * quantidade,
        });
      } else {
        await setDoc(listaRef, {
          uid: user.uid,
          titulo: "Nova Lista",
          itens: [novoItem],
          total: parseFloat(valorUnitario) * quantidade,
        });
      }
    }
    
    setItens((prevItens) => [...prevItens, novoItem]);
    setItem("");
    setValorUnitario(0);
    setQuantidade(0);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-11/12 max-w-md text-black">
        <div className="h-1 w-12 bg-gray-400 mx-auto rounded-full mb-4"></div>
        
        <label className="block text-sm text-gray-600">Selecione uma categoria</label>
        <select
          className="w-full p-2 border rounded mt-1"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="">Selecione</option>
        </select>

        <label className="block text-sm text-gray-600 mt-4">Selecione o item</label>
        <input
          type="text"
          className="w-full p-2 border rounded mt-1"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        >
        </input>

        <label className="block text-sm text-gray-600 mt-4">Valor unitário</label>
        <input
        type="number"
        className="w-full p-2 border rounded mt-1 bg-gray-100 text-gray-600"
        value={valorUnitario}
        onChange={(e) => setValorUnitario(parseFloat(e.target.value) || 0)}
        placeholder="0.00"
        />

        <label className="block text-sm text-gray-600 mt-4">Quantidade</label>
        <div className="flex items-center mt-1">
          <button className="p-2 bg-red-300 text-white rounded" onClick={() => setQuantidade(Math.max(0, quantidade - 1))}>-</button>
          <span className="px-4 text-black">{quantidade}</span>
          <button className="p-2 bg-red-300 text-white rounded" onClick={() => setQuantidade(quantidade + 1)}>+</button>
        </div>
        
        <button
          className="w-full mt-6 bg-red-600 text-white p-3 rounded"
          onClick={adicionarItem}
        >
          Adicionar
        </button>
        
        <hr className="my-4" />
        <div className="text-center text-gray-600 text-sm">Resumo da lista</div>
        <div className="flex justify-between text-gray-600 text-sm mt-2">
          <p>Quantidade Total</p>
          <p>0000</p>
        </div>
        <div className="flex justify-between font-semibold text-gray-800 text-lg">
          <p>Valor Total</p>
          <p>R$ 0000,00</p>
        </div>
      </div>
    </div>
  );
};

export default AddItemModal;
