import React, { useState, useRef } from 'react';
import { v4 as uuid } from 'uuid';

import TodoList from './TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return console.log(name)

    // if (name === '') return setTodos(
    //   prevTodos => {
    //     return [...prevTodos, { id: uuid, name: name, completed: false}]
    //   }
    // )
    todoNameRef.current.value = null
  }

  return (
    <>
      <TodoList todos = { todos }/>
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Complete</button>
      <div>0 left</div>
    </>
  );
}

export default App;
