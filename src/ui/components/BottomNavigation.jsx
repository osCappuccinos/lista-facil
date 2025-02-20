import { useNavigate } from 'react-router-dom';
import { List, PencilLine, CircleUser } from 'lucide-react';

const BottomNavigation = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#CFD8DC] flex justify-around items-center h-16">
      <button
        className="flex flex-col items-center text-[#656565] hover:text-[#64a651] transition-colors"
        onClick={() => navigate("/home")}
      >
        <List />
        <span className="text-xs mt-1">Listas</span>
      </button>

      <button
        onClick={() => navigate("/new-list")}
        className="flex flex-col items-center justify-center gap-1 bg-transparent border-none cursor-pointer pb-8"
      >
        <div className="bg-[#388E3C] flex items-center justify-center w-12 h-12 rounded-full p- shadow-lg hover:bg-[#4f7545] hover:text-[#388E3C] transition-colors">
          <PencilLine color="white" />
        </div>
        <p className="text-sm text-gray-700">Nova Lista</p>
      </button>

      <button
        className="flex flex-col items-center text-[#656565] hover:text-[#388E3C] transition-colors"
        onClick={() => navigate("/profile")}
      >
        <CircleUser />
        <span className="text-xs mt-1">Perfil</span>
      </button>
    </div>

  );
};

export default BottomNavigation;
