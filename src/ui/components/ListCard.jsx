import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ListaCard = ({ id, titulo, itens, total, onEdit, onDelete }) => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(titulo);

  const handleEdit = () => {
    onEdit(id, newTitle);
    setIsEditing(false);
  };

  return (
    <div 
      className="bg-white w-full min-h-40 drop-shadow-lg rounded-lg p-4 cursor-pointer hover:shadow-xl transition-shadow" 
      onClick={() => navigate(`/list/${id}`)}
    >
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="w-full p-2 border rounded mt-1"
          />
          <button onClick={handleEdit} className="bg-green-500 text-white px-3 py-1 rounded text-xs mt-2">
            Save
          </button>
        </div>
      ) : (
        <h2 className="text-gray-800 font-bold text-lg">{titulo}</h2>
      )}
      {/* Descrição dos itens */}
      <ul className="text-gray-600 text-sm mt-2">
        {itens.slice(0, 3).map((item, index) => (
          <li key={index}>{item.quantidade}x {item.nome}</li>
        ))}
        {itens.length > 3 && <li className="text-gray-500">...</li>}
      </ul>
      {/* Total */}
      <p className="text-gray-700 font-bold mt-3 fixed bottom-3 right-4 text-[15px]">TOTAL: R$ {total.toFixed(2)}</p>
    </div>
  );
};

export default ListaCard;