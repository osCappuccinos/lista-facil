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
                className="mt-6 bg-red-700 text-white py-2 px-6 rounded-lg shadow-md w-72 text-lg"
                onClick={() => navigate("/login")}
            >
                FAZER LOGIN
            </button>
            <button
                className="mt-4 border border-red-700 text-red-700 py-2 px-6 rounded-lg w-72 text-lg"
                onClick={handleGuestLogin}
            >
                ENTRAR COMO CONVIDADO
            </button>
            <p className="mt-4 text-gray-600">
                NÃO POSSUI UMA CONTA? <Link to="/register" className="text-red-700 font-bold">CRIE UMA AQUI</Link>
            </p>
        </div>
    );
};

export default WelcomePage;
