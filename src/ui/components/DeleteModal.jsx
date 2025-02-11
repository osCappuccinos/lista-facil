import { db } from "../../../firebase";
import { doc, deleteDoc } from "firebase/firestore";
import { Trash2 } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const DeleteModal = ({ isVisible, onHide, listId }) => {
    const navigate = useNavigate();
    const deleteList = async () => {
        const listaRef = doc(db, "listas", listId);
        await deleteDoc(listaRef);
        navigate("/home");
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