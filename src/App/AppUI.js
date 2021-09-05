import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";
function AppUI({
  totalTodos,
  searchValue,
  todosCompleted,
  setSearchValue,
  searchedTodos,
  onComplete,
  onDelete,
}) {
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
export default AppUI;
