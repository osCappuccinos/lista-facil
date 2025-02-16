import { db, auth } from "../../../firebase";
import { doc, deleteDoc, getDoc, setDoc } from "firebase/firestore";
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DeleteModal = ({ isVisible, onHide, listId }) => {
    const navigate = useNavigate();

    const deleteList = async () => {
        try {
            const user = auth.currentUser;
            if (!user) {
                console.error("Usuário não autenticado");
                return;
            }

            const listaRef = doc(db, "listas", listId);
            const listaSnap = await getDoc(listaRef);

            if (listaSnap.exists()) {
                const listaData = listaSnap.data();
                const trashRef = doc(db, "trash", listId);
                
                // Add userId and deletedAt to the trash data
                await setDoc(trashRef, {
                    ...listaData,
                    userId: user.uid,
                    deletedAt: new Date().toISOString()
                });
                
                await deleteDoc(listaRef);
                navigate("/home");
            } else {
                console.error("Lista não encontrada");
            }
        } catch (error) {
            console.error("Erro ao mover para lixeira:", error);
            alert("Erro ao mover item para lixeira. Tente novamente.");
        }
    };

    if (!isVisible) return null;
    return (
        <div>
            <div className="absolute inset-0 bg-black opacity-80" onClick={onHide}></div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                            w-[90vw] h-[50vw] md:w-[30vw] md:h-[16vw] bg-white rounded-md p-5 text-[#00000088]
                            flex flex-col items-center justify-center text-center">

                <div className="mb-4 p-2.5 bg-[#FFF1F0] rounded-md">
                    <Trash2 color="#F5222D" />
                </div>

                <p className="mb-4">Você tem certeza de que<br />deseja apagar esta lista?</p>

                <div className="flex justify-center gap-4 w-full">
                    <button className="text-[#00000065] py-2 px-6 rounded-lg w-full
                    text-[14px] font-bold bg-white cursor-pointer transition-colors duration-300"
                        onClick={onHide}>
                        Cancelar
                    </button>

                    <button className="border border-[#F5222D] text-[#F5222D] py-2 px-6 rounded-lg w-full
                    text-[14px] font-bold bg-white cursor-pointer transition-colors duration-300"
                        onClick={deleteList}>
                        Sim, apagar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;