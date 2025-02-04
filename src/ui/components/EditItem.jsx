import React, { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

const EditItem = ({ isOpen, onClose, item, listId, setItens }) => {
  const [itemName, setItemName] = useState('');
  const [categoria, setCategoria] = useState('');
  const [valorUnitario, setValorUnitario] = useState(0);
  const [quantidade, setQuantidade] = useState(0);
  const [categorias, setCategorias] = useState([]);
  const [itens, setItensState] = useState([]);

  useEffect(() => {
    if (isOpen && item) {
      setItemName(item.nome);
      setCategoria(item.categoria || '');
      setValorUnitario(item.preco || 0);
      setQuantidade(item.quantidade || 0);
    }
  }, [isOpen, item]);

  useEffect(() => {
    const fetchCategorias = async () => {
      const categoriasCollection = collection(db, "categorias");
      const categoriasSnapshot = await getDocs(categoriasCollection);
      const categoriasList = categoriasSnapshot.docs.map(doc => doc.data().nome);
      setCategorias(categoriasList);
    };

    fetchCategorias();
  }, []);

  useEffect(() => {
    const fetchItens = async () => {
      if (categoria) {
        const categoriaDoc = doc(db, "categorias", categoria);
        const categoriaSnap = await getDoc(categoriaDoc);
        if (categoriaSnap.exists()) {
          setItensState(categoriaSnap.data().itens);
        }
      }
    };

    fetchItens();
  }, [categoria]);

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
      await updateDoc(listaRef, { itens });
      setItens(itens);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg w-full max-w-md mx-4 p-6">
        <h2 className="text-xl font-semibold mb-4">Edit Item</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="categoria" className="block text-sm font-medium text-gray-700">
              Categoria
            </label>
            <select
              id="categoria"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="">Selecione uma categoria</option>
              {categorias.map((cat, index) => (
                <option key={index} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="itemName" className="block text-sm font-medium text-gray-700">
              Nome do item
            </label>
            <select
              id="itemName"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="">Selecione um item</option>
              {itens.map((it, index) => (
                <option key={index} value={it.nome}>{it.nome}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="valorUnitario" className="block text-sm font-medium text-gray-700">
              Valor Unitário
            </label>
            <input
              type="number"
              step="0.01"
              id="valorUnitario"
              value={valorUnitario}
              onChange={(e) => setValorUnitario(parseFloat(e.target.value) || 0)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="0.00"
            />
          </div>
          <div>
            <label htmlFor="quantidade" className="block text-sm font-medium text-gray-700">
              Quantidade
            </label>
            <input
              type="number"
              id="quantidade"
              value={quantidade}
              onChange={(e) => setQuantidade(parseInt(e.target.value))}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-gray rounded-md"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditItem;