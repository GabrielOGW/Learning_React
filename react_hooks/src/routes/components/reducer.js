import React, { useReducer, useState } from "react";
import Todo from "./Todo";

// useRecucer não é tão propio para codigos mais simples, pois, acaba escrevendo mais codigo para algo não tão complexo

// boa pratica para maior legibilidade
export const ACTIONS = {
  // INCREMENTAR: `incrementar`,
  // DECREMENTAR: `decrementar`
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

function redutor(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    //   case ACTIONS.INCREMENTAR:
    //     return {count: state.count + 1}
    //   case ACTIONS.DECREMENTAR:
    //     return {count: state.count - 1}
    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

export default function Reducer() {
  // const [state, dispatch] = useReducer(redutor, {count: 0})

  // function incrementar() {
  //   dispatch({type: ACTIONS.INCREMENTAR})
  // }
  // function decrementar() {
  //   dispatch({type: ACTIONS.DECREMENTAR})
  // }
  const [todos, dispatch] = useReducer(redutor, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }

  return (
    <>
      <div>
        {/* <button onClick={decrementar}>-</button>
      <span>{state.count}</span>
    <button onClick={incrementar}>+</button> */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </form>
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
        })}
      </div>
    </>
  );
}
