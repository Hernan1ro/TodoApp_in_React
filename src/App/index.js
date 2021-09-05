import React from "react";
import AppUI from "./AppUI";
// import "./App.css";
// const defaultTodos = [
//   { text: "cortar cebolla", completed: false },
//   { text: "Tomar el curso de React", completed: false },
//   { text: "Llorar con la llorona", completed: false },
//   { text: "Verme narcos", completed: false },
// ];
function useLocalStorage(itemName, initialValue) {
  const LocalStorageItem = localStorage.getItem(itemName);

  let parsedItem;

  if (!LocalStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(LocalStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };
  return [item, saveItem];
}

function App() {
  const [todos, saveTodos] = useLocalStorage("TodosLocal", []);
  const [searchValue, setSearchValue] = React.useState("");
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
  const onDelete = (text) => {
    const indexTodo = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(indexTodo, 1);
    saveTodos(newTodos);
  };
  return (
    <AppUI
      totalTodos={totalTodos}
      searchValue={searchValue}
      todosCompleted={todosCompleted}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      onComplete={onComplete}
      onDelete={onDelete}
    />
  );
}

export default App;
