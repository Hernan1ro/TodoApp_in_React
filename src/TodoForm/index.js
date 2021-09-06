import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { onAdd, setOpenModal } = React.useContext(TodoContext);
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    onAdd(newTodoValue);
    setOpenModal(false);
  };
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  return (
    <form action="" onSubmit={onSubmit}>
      <label htmlFor="">Añade una nueva tarea :)</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla para el almuerzo"
      ></textarea>
      <div className="TodoForm-buttonContanier">
        <button
          className="TodoForm-button TodoForm-button--cancel"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          className="TodoForm-button TodoForm-button--add"
          type="submit"
          onClick={onAdd}
        >
          Añadir
        </button>
      </div>
    </form>
  );
}
export { TodoForm };
