import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TodosLocal", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const totalTodos = todos.length;
  const todosCompleted = todos.filter((todo) => !!todo.completed).length;
  let searchedTodos = [];
  if (searchValue.length <= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const textTodo = todo.text.toLowerCase();
      const textSearch = searchValue.toLowerCase();
      return textTodo.includes(textSearch);
    });
  }
  const onComplete = (text) => {
    const indexTodo = todos.findIndex((todo) => todo.text === text);
    const newTodo = [...todos];
    newTodo[indexTodo].completed = true;
    saveTodos(newTodo);
  };
  const onAdd = (text) => {
    const newTodo = [...todos];
    newTodo.push({
      completed: false,
      text,
    });
    saveTodos(newTodo);
  };
  const onDelete = (text) => {
    const indexTodo = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(indexTodo, 1);
    saveTodos(newTodos);
  };
  return (
    <TodoContext.Provider
      value={{
        error,
        loading,
        totalTodos,
        searchValue,
        todosCompleted,
        setSearchValue,
        searchedTodos,
        onComplete,
        onDelete,
        openModal,
        setOpenModal,
        onAdd,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
