import { Link, useNavigate } from "react-router-dom";

const WelcomePage = () => {
    const navigate = useNavigate();

    return (
        <div 
            className="flex flex-col items-center min-h-screen bg-white px-6 pt-10" 
            style={{ fontFamily: 'Calibri' }}
        >
            <div className="w-40 h-40 border border-gray-400 flex items-center justify-center my-20">
                <span className="text-gray-400 text-4xl">🖼️</span>
            </div>
    
            <div className="flex flex-col w-full max-w-xs items-center">
                <button 
                    className="w-full bg-[#BF360C] text-white text-[16px] font-medium py-3 rounded-md shadow-md mb-4"
                    onClick={() => navigate("/login")}
                >
                    FAZER LOGIN
                </button>
    
                <button 
                    className="w-full border-2 border-[#BF360C] text-[#BF360C] text-[16px] font-semibold py-3 rounded-md mb-6"
                    onClick={() => navigate("/anonymous")}
                >
                    ENTRAR COMO CONVIDADO
                </button>
    
                <p className="text-[12px] text-gray-700">
                    NÃO POSSUI UMA CONTA? 
                    <Link to="/register" className="text-[#BF360C] font-bold ml-1">
                        CRIE UMA AQUI
                    </Link>
                </p>
            </div>
        </div>
    );
    
};

export default WelcomePage;
