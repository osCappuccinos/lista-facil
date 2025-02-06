import React, { useState, useEffect } from "react";
import { doc, getDoc, setDoc, updateDoc, arrayUnion, collection, getDocs } from "firebase/firestore";
import { db, auth } from "../../../firebase";

const AddItemModal = ({ isOpen, onClose, listId, setListId, setItens, itemUid }) => {
  const [categoria, setCategoria] = useState("");
  const [item, setItem] = useState("");
  const [valorUnitario, setValorUnitario] = useState(0);
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
    if (!item.trim() || isNaN(parseFloat(valorUnitario)) || quantidade <= 0) return;

    const user = auth.currentUser;
    if (!user) return;

    let listaRef = doc(db, "listas", listId);
    const listaSnap = await getDoc(listaRef);

    if (editando) {
      if (listaSnap.exists()) {
        const itens = listaSnap.data().itens || [];
        const novoItens = itens.map((it) =>
          it.uid === itemUid
            ? { ...it, nome: item, preco: parseFloat(valorUnitario), quantidade }
            : it
        );

        await updateDoc(listaRef, { itens: novoItens });
        setItens(novoItens);
      }
    } else {
      const novoItem = {
        uid: crypto.randomUUID(),
        nome: item,
        preco: parseFloat(valorUnitario),
        quantidade,
        comprado: false,
      };

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

      setItens((prevItens) => [...prevItens, novoItem]);
    }

    setItem("");
    setValorUnitario(0);
    setQuantidade(1);
    setEditando(false);
    onClose();
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
          step="0.1"
          className="w-full p-2 border rounded mt-1 bg-white text-gray-600"
          value={valorUnitario}
          onChange={(e) => setValorUnitario(parseFloat(e.target.value))}
          placeholder=""
        />

        <div className="flex items-center justify-between mt-4">
          <label className="block text-sm text-gray-600">Quantidade</label>
          <div className="flex items-center mt-1 bg-[#FBE9E7] h-7 w-21 rounded-md">
            <button className="p-2 text-gray rounded" onClick={() => setQuantidade(Math.max(1, quantidade - 1))}>-</button>
            <span className="px-4 text-black">{quantidade}</span>
            <button className="p-2 text-gray rounded" onClick={() => setQuantidade(quantidade + 1)}>+</button>
          </div>
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
