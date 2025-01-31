import React from "react";
import { useNavigate } from "react-router-dom";

const ListaCard = ({ id, titulo, itens, total }) => {
  const navigate = useNavigate();

  return (
    <div 
      className="bg-white shadow-lg rounded-lg p-4 cursor-pointer hover:shadow-xl transition-shadow" 
      onClick={() => navigate(`/list/${id}`)}
    >
      <h2 className="text-gray-800 font-bold text-lg">{titulo}</h2>
      <ul className="text-gray-600 text-sm mt-2">
        {itens.slice(0, 3).map((item, index) => (
          <li key={index}>{item.quantidade}x {item.nome}</li>
        ))}
        {itens.length > 3 && <li className="text-gray-500">...</li>}
      </ul>
      <p className="text-gray-700 font-bold mt-3">TOTAL: R$ {total.toFixed(2)}</p>
    </div>
  );
};

export default ListaCard;
