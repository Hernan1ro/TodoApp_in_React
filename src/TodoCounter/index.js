import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";
function TodoCounter() {
  const { todosCompleted, totalTodos } = React.useContext(TodoContext);
  return (
    <h2 className="TodoCounter">
      Has completado {todosCompleted} de {totalTodos} tareas
    </h2>
  );
}

export { TodoCounter };
