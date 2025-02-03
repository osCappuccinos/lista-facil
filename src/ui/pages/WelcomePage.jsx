import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInAnonymously } from "firebase/auth";

const WelcomePage = () => {
    const navigate = useNavigate();
    const auth = getAuth();

    const handleGuestLogin = async () => {
        try {
            await signInAnonymously(auth);
            navigate("/home");
        } catch (error) {
            alert("Erro ao entrar como convidado: " + error.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <div className="w-40 h-40 border border-gray-400 flex items-center justify-center">
                <span className="text-gray-400">🖼️</span>
            </div>
            <button
    className="btn-register"
    onClick={() => navigate("/login")}
>
    FAZER LOGIN
        </button>
        <button
            className="btn-guest"
            onClick={handleGuestLogin}
        >
            ENTRAR COMO CONVIDADO
        </button>
             <p className="register-text">
                NÃO POSSUI UMA CONTA? <Link to="/register" className="register-link">CRIE UMA AQUI</Link>
            </p>
        </div>
    );
};

export default WelcomePage;
