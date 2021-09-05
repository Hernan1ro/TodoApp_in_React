import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  const funcion = (mensaje) => {
    alert(mensaje);
  };
  return (
    <button
      className="CreateTodoButton"
      onClick={() => {
        funcion("Esto va estar epico papus");
      }}
    >
      +
    </button>
  );
}
export { CreateTodoButton };
