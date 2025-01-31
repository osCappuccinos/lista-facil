import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ArrowLeft } from "lucide-react";

const LoginPage = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (err) {
      setError("Credenciais inválidas. Tente novamente.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6">
      {/* Botão de voltar */}
      <div className="absolute top-8 left-6 cursor-pointer" onClick={() => navigate(-1)}>
        <ArrowLeft size={28} className="text-red-700" />
      </div>

      <h1 className="text-2xl font-semibold text-gray-700 mb-6">Entre agora</h1>

      {/* Formulário */}
      <form className="w-full max-w-sm" onSubmit={handleLogin}>
        <label className="block text-gray-700 text-sm font-medium mb-1">Senha</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-red-700"
          required
        />

        <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-red-700"
          required
        />

        {error && <p className="text-red-700 text-sm mb-4">{error}</p>}

        <button
          type="submit"
          className="w-full bg-red-700 text-white py-3 rounded-lg shadow-md text-lg"
        >
          ENTRAR
        </button>
      </form>

      <p className="mt-6 text-gray-600 text-sm">
        NÃO POSSUI UMA CONTA?{" "}
        <Link to="/register" className="text-red-700 font-bold">
          CRIE UMA AQUI
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
