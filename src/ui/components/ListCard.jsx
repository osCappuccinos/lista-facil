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
      className="bg-white shadow-lg rounded-lg p-4 cursor-pointer hover:shadow-xl transition-shadow" 
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
          <button onClick={handleEdit} className="bg-green-500 text-white p-2 rounded mt-2">Save</button>
        </div>
      ) : (
        <h2 className="text-gray-800 font-bold text-lg">{titulo}</h2>
      )}
      <ul className="text-gray-600 text-sm mt-2">
        {itens.slice(0, 3).map((item, index) => (
          <li key={index}>{item.quantidade}x {item.nome}</li>
        ))}
        {itens.length > 3 && <li className="text-gray-500">...</li>}
      </ul>
      <p className="text-gray-700 font-bold mt-3">TOTAL: R$ {total.toFixed(2)}</p>
      <div className="flex justify-between mt-4">
        <button onClick={(e) => { e.stopPropagation(); setIsEditing(true); }} className="bg-blue-500 text-white p-2 rounded">Edit</button>
        <button onClick={(e) => { e.stopPropagation(); onDelete(id); }} className="bg-red-500 text-white p-2 rounded">Delete</button>
      </div>
    </div>
  );
};

export default ListaCard;