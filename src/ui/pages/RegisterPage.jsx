import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from '../../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

const RegisterPage = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!nome || !email || !senha) {
      setError('Todos os campos são obrigatórios');
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;
      await setDoc(doc(db, 'users', user.uid), { nome });
      navigate('/login');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4"
      style={{ fontFamily: 'Calibri' }}
    >
      <header className="w-full max-w-md mb-4">
        <button onClick={() => navigate(-1)} className="text-left text-3xl mb-2">
          ←
        </button>
      </header>

      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h1 className="text-[24px] font-bold text-center mb-6">Crie sua conta</h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label
              htmlFor="nome"
              className="block text-gray-700 mb-1 text-left"
              style={{ fontSize: '14px' }}
            >
              Nome
            </label>
            <input
              id="nome"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 mb-1 text-left"
              style={{ fontSize: '14px' }}
            >
              E-mail
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <div>
            <label
              htmlFor="senha"
              className="block text-gray-700 mb-1 text-left"
              style={{ fontSize: '14px' }}
            >
              Senha
            </label>
            <input
              id="senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full mt-4 py-3 rounded text-white font-semibold bg-[#BF360C] hover:bg-red-700 transition-colors ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Cadastrando...' : 'Cadastrar'}
          </button>
        </form>

        <div className="text-center mt-2">
          <Link to="/login" className="text-[#BF360C] font-medium hover:underline">
            LOGIN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;