import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1>Contato</h1>
      {/* 5 - Nested Routes */}
      <p>
        <Link to="/contact/1">Forma do Contato 1</Link>
      </p>
      <p>
        <Link to="/contact/2">Forma do Contato 2</Link>
      </p>
      <p>
        <Link to="/contact/3">Forma do Contato 3</Link>
      </p>
    </div>
  );
};

export default Contact;
