import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from "lucide-react";
import { getAuth, signInAnonymously } from "firebase/auth";
import { db } from "../../../firebase";
import { setDoc, doc } from "firebase/firestore";

const GuestPage = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [name, setName] = useState("");

    const handleSignInAnonymously = async () => {
        try {
            return await signInAnonymously(auth);
        } catch (error) {
            alert("Erro ao entrar como convidado: " + error.message);
            throw error;
        }
    };

    const handleGuestLogin = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await handleSignInAnonymously();
            const user = userCredential.user;

            await setDoc(doc(db, 'users', user.uid), {
                nome: name,
                createdAt: new Date().toISOString()
            });

            setName('');
            navigate("/home");
        } catch (err) {
            console.error("Erro no login anônimo:", err);
            alert("Erro ao cadastrar o usuário: " + err.message);
        }
    };


    return (
        <div className="min-h-screen min-w-screen bg-white px-6" style={{ fontFamily: 'Calibri' }}>
            <header className="fixed top-5 left-0 right-0 bg-white px-6 py-2 flex justify-between items-center">
                <div className="absolute top-5 left-6 cursor-pointer" onClick={() => navigate(-1)}>
                    <ArrowLeft size={24} className="text-red-700" />
                </div>
            </header>

            <div className='pt-20 flex flex-col items-center'>
                <h1 className="text-[20px] font-semibold text-[#656565] mb-6">Acesse como convidado</h1>

                <form onSubmit={(e) => handleGuestLogin(e)} className="w-full max-w-md space-y-4">
                    <label className="block text-[#455A64] text-[14px] text-left font-medium mb-1">Informe seu nome</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border border-[#CFD8DC]  rounded-md p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-[#BF360C] text-black"
                        required
                    />

                    <button
                        type="submit"
                        className="w-full !bg-[#BF360C] text-white mt-4 h-11 rounded-lg shadow-md text-[16px]"
                    >
                        ACESSAR
                    </button>
                </form>
                <button className="w-full text-[#BF360C] mt-4 h-11 rounded-lg text-[16px] font-bold"
                    onClick={() => navigate("/register")}
                >
                    CRIE UMA CONTA
                </button>
            </div>
        </div>
    );
};

export default GuestPage;