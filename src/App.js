import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";
// import "./App.css";
const defaultTodos = [
  { text: "cortar cebolla", completed: false },
  { text: "Tomar el curso de React", completed: false },
  { text: "Llorar con la llorona", completed: false },
  { text: "Verme narcos", completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
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
    setTodos(newTodo);
  };
  const onDelete = (text) => {
    const indexTodo = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(indexTodo, 1);
    setTodos(newTodos);
  };
  return (
    <React.Fragment>
      <TodoCounter totalTodos={totalTodos} todosCompleted={todosCompleted} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => {
              onComplete(todo.text);
            }}
            onDelete={() => {
              onDelete(todo.text);
            }}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
