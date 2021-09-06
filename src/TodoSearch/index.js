import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";
function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  const onChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  return (
    <input
      className="TodoSearch"
      placeholder="Busca tu tarea"
      onChange={onChange}
      value={searchValue}
    />
  );
}
export { TodoSearch };
