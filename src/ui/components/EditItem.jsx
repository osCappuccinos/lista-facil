import React, { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";

const EditItem = ({ isOpen, onClose, item, listId, setItens }) => {
  const [itemName, setItemName] = useState('');
  const [categoria, setCategoria] = useState('');
  const [valorUnitario, setValorUnitario] = useState(0);
  const [quantidade, setQuantidade] = useState(0);

  useEffect(() => {
    if (isOpen && item) {
      setItemName(item.nome);
      setCategoria(item.categoria || '');
      setValorUnitario(item.preco || 0);
      setQuantidade(item.quantidade || 0);
    }
  }, [isOpen, item]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedItem = { 
      ...item, 
      nome: itemName, 
      categoria, 
      preco: valorUnitario, 
      quantidade 
    };

    const listaRef = doc(db, "listas", listId);
    const listaSnap = await getDoc(listaRef);

    if (listaSnap.exists()) {
      const itens = listaSnap.data().itens.map((it) =>
        it.nome === item.nome ? updatedItem : it
      );

      await updateDoc(listaRef, {
        itens,
        total: itens.reduce((sum, it) => sum + (it.preco * it.quantidade), 0),
      });

      setItens(itens);
    }

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <h2>Edit Item</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Item Name:
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
        </label>
        <label>
          Categoria:
          <input
            type="text"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          />
        </label>
        <label>
          Valor Unitário:
          <input
            type="number"
            value={valorUnitario}
            onChange={(e) => setValorUnitario(parseFloat(e.target.value) || 0)}
            required
          />
        </label>
        <label>
          Quantidade:
          <input
            type="number"
            value={quantidade}
            onChange={(e) => setQuantidade(parseInt(e.target.value) || 0)}
            required
          />
        </label>
        <button type="submit">Update</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default EditItem;