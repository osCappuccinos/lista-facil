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
              <List></List>
              <span className="text-xs mt-1">Listas</span>
            </button>
            
            <button
              onClick={() => navigate("/new-list")}
              className="bg-[#64a651] flex flex-col items-center justify-center grow-0 shrink-0 w-12 h-12 text-grey rounded-full p-3 shadow-lg -translate-y-6 hover:bg-red-700 transition-colors"
            >
              
            <PencilLine></PencilLine>
            </button>
    
            
            <button 
              className="flex flex-col items-center text-[#656565] hover:text-[#64a651] transition-colors"
              onClick={() => navigate("/profile")}
            >
              <CircleUser></CircleUser>
              <span className="text-xs mt-1">Perfil</span>
            </button>
          </div>

  );
};

export default BottomNavigation;
