import { Link, useNavigate } from "react-router-dom";

const WelcomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen min-w-screen bg-white">
            <div className="w-40 h-40 border border-gray-400 flex items-center justify-center">
                <span className="text-gray-400">🖼️</span>
            </div>
            <button
    className="btn-register shadow-md"
    onClick={() => navigate("/login")}
>
    FAZER LOGIN
        </button>
        <button
            className="btn-guest"
            onClick={() => navigate("/anonymous")}
        >
            ENTRAR COMO CONVIDADO
        </button>
             <p className="register-text text-[12px]">
                NÃO POSSUI UMA CONTA? <Link to="/register" className="register-link text-[12px]">CRIE UMA AQUI</Link>
            </p>
        </div>
    );
};

export default WelcomePage;
