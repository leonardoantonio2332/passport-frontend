import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ContactDetails = () => {
  const { id } = useParams();

  // 6 - Redirecionando
  const navigate = useNavigate();

  const handleContact = () => {
    console.log("Enviando mensagem para o contato: ", id);
    return navigate("/");
  };

  return (
    <div>
      <h1>Exibindo mais informações do contato: {id}</h1>
      <button onClick={handleContact}>Enviar Mensagem</button>
    </div>
  );
};

export default ContactDetails;
