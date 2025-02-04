import React, { useState, useEffect } from "react";
import { doc, getDoc, setDoc, updateDoc, arrayUnion, collection, getDocs } from "firebase/firestore";
import { db, auth } from "../../../firebase";

const AddItemModal = ({ isOpen, onClose, listId, setListId, setItens }) => {
  const [categoria, setCategoria] = useState("");
  const [item, setItem] = useState("");
  const [valorUnitario, setValorUnitario] = useState(0);
  const [quantidade, setQuantidade] = useState(0);
  const [categorias, setCategorias] = useState([]);
  const [itensSugeridos, setItensSugeridos] = useState([]);
  const [valorTotal, setValorTotal] = useState(0);

  // Busca todas as categorias do Firestore quando o componente monta
  useEffect(() => {
    const fetchCategorias = async () => {
      const categoriasSnapshot = await getDocs(collection(db, "categorias"));
      const lista = categoriasSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCategorias(lista);
    };
    fetchCategorias();
  }, []);

  // Atualiza os itens sugeridos quando a categoria é selecionada
  useEffect(() => {
    if (categoria) {
      // Encontra a categoria selecionada pelo nome
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

  // Atualiza o valor total quando a quantidade ou o valor unitário mudam
  useEffect(() => {
    setValorTotal(quantidade * valorUnitario);
  }, [quantidade, valorUnitario]);

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
          {categorias.map((cat, index) => (
            <option key={index} value={cat.nome}>{cat.nome}</option>
          ))}
        </select>

        <label className="block text-sm text-gray-600 mt-4">Selecione o item</label>
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
          step="0.01"
          className="w-full p-2 border rounded mt-1 bg-gray-100 text-gray-600"
          value={valorUnitario}
          onChange={(e) => setValorUnitario(parseFloat(e.target.value) || 0)}
          placeholder=""
        />

        <label className="block text-sm text-gray-600 mt-4">Quantidade</label>
        <div className="flex items-center mt-1">
          <button className="p-2 bg-red-300 text-gray rounded" onClick={() => setQuantidade(Math.max(0, quantidade - 1))}>-</button>
          <span className="px-4 text-black">{quantidade}</span>
          <button className="p-2 bg-red-300 text-gray rounded" onClick={() => setQuantidade(quantidade + 1)}>+</button>
        </div>
        
        <button
          className="w-full mt-6 bg-red-600 text-gray p-3 rounded"
          onClick={adicionarItem}
        >
          Adicionar
        </button>
        
        <hr className="my-4" />
        <div className="text-center text-gray-600 text-sm">Resumo da lista</div>
        <div className="flex justify-between text-gray-600 text-sm mt-2">
          <p>Quantidade Total</p>
          <p>{quantidade}</p>
        </div>
        <div className="flex justify-between font-semibold text-gray-800 text-lg">
          <p>Valor Total</p>
          <p>R$ {valorTotal.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default AddItemModal;