import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

const RegisterPage = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!nome || !email || !senha || !confirmarSenha) {
      setError('Todos os campos são obrigatórios');
      setLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      setError('Por favor, insira um e-mail válido');
      setLoading(false);
      return;
    }

    if (senha.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres');
      setLoading(false);
      return;
    }

    if (senha !== confirmarSenha) {
      setError('As senhas não coincidem');
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;
      
      await setDoc(doc(db, 'users', user.uid), { 
        nome,
        email,
        createdAt: new Date().toISOString()
      });
      
      setNome('');
      setEmail('');
      setSenha('');
      setConfirmarSenha('');
      
      navigate('/login');
    } catch (err) {
      switch (err.code) {
        case 'auth/email-already-in-use':
          setError('Este e-mail já está cadastrado');
          break;
        case 'auth/weak-password':
          setError('A senha deve ter pelo menos 6 caracteres');
          break;
        case 'auth/invalid-email':
          setError('E-mail inválido');
          break;
        default:
          setError('Ocorreu um erro durante o cadastro. Tente novamente.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white px-6" style={{ fontFamily: 'Calibri' }}>
      {/* Cabeçalho fixo */}
      <header className="fixed top-5 left-0 right-0 bg-white px-6 py-2 flex justify-between items-center z-10">
        <button 
          className="w-10 h-10 flex items-center justify-center bg-white text-[#656565] rounded-lg focus:outline-none" 
          onClick={() => navigate(-1)}
        >
          ←
        </button>
      </header>

      {/* Conteúdo principal */}
      <div className="pt-20 flex flex-col items-center">
        <h1 className="text-[24px] font-semibold text-[#656565] mb-6">Crie sua conta</h1>

        {error && <p className="text-red-500 mb-4 text-sm w-full max-w-md">{error}</p>}

        <form onSubmit={handleRegister} className="w-full max-w-md space-y-4">
          <div>
            <label htmlFor="nome" className="block text-gray-700 mb-1 text-sm">
              Nome
            </label>
            <input
              id="nome"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full px-4 py-2 border border-[#CFD8DC] rounded-lg focus:outline-none focus:border-[#BF360C]"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 mb-1 text-sm">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-[#CFD8DC] rounded-lg focus:outline-none focus:border-[#BF360C]"
              required
            />
          </div>

          <div>
            <label htmlFor="senha" className="block text-gray-700 mb-1 text-sm">
              Senha (mínimo 6 caracteres)
            </label>
            <input
              id="senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full px-4 py-2 border border-[#CFD8DC] rounded-lg focus:outline-none focus:border-[#BF360C]"
              required
              minLength="6"
            />
          </div>

          <div>
            <label htmlFor="confirmarSenha" className="block text-gray-700 mb-1 text-sm">
              Confirmar Senha
            </label>
            <input
              id="confirmarSenha"
              type="password"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              className="w-full px-4 py-2 border border-[#CFD8DC] rounded-lg focus:outline-none focus:border-[#BF360C]"
              required
              minLength="6"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full mt-6 py-3 rounded-lg text-sm font-medium border border-[#BF360C] text-[#BF360C] 
              hover:bg-[#BF360C] hover:text-white transition-colors duration-300 ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
          >
            {loading ? 'Cadastrando...' : 'Cadastrar'}
          </button>
        </form>

        <div className="w-full max-w-md text-center mt-4">
          <span className="text-gray-600 text-sm">Já tem uma conta? </span>
          <Link 
            to="/login" 
            className="text-[#BF360C] text-sm font-medium hover:underline"
          >
            Faça login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;