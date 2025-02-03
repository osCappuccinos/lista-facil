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
      <div className="absolute top-14 left-151 cursor-pointer" onClick={() => navigate(-1)}>
        <ArrowLeft size={24} className="text-red-700" />
      </div>

      <h1 className="text-[24px] font-semibold text-[#656565] mb-6">Entre agora</h1>

      <form className="w-full max-w-sm" onSubmit={handleLogin}>
      <label className="block text-[#455A64] text-[14px] text-left font-medium mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          class="w-full border border-[#CFD8DC]  rounded-md p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-[#BF360C] text-black"
          required
        />

        <label className="block text-[#455A64] text-[14px] text-left font-medium mb-1">Senha</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#BF360C] text-black"
          required
        />

        {error && <p className="text-red-700 text-sm mb-4">{error}</p>}

        <button
          type="submit"
          class="w-full !bg-[#BF360C] text-white mt-4 rounded-lg shadow-md text-[16px]"
        >
          ENTRAR
        </button>
      </form>

      <p class="mt-6 text-[#888888] text-[12px]">
        NÃO POSSUI UMA CONTA?{" "}
        <Link to="/register" class="!text-[#BF360C] font-bold">
          CRIE UMA AQUI
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
