import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Contexto } from "../../servicios/Memoria";
import Detalles from "../nueva/Detalles";

function Modal() {
  const { id } = useParams();
  const [estado, enviar] = useContext(Contexto);
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75">
        {JSON.stringify(estado.objetos[id])}
        <Detalles></Detalles>
    </div>
  );
}

export default Modal;
