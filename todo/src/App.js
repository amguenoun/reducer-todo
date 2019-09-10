import React, { useState, useReducer } from 'react';

//import reducer
import { initialState, todoReducer } from './reducers/todoReducer';

//import stylesheets
import './App.css';

function App() {
  const [newTodo, setNewTodo] = useState('');
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log(state);

  const handleInput = (e) => {
    setNewTodo(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: { id: Date.now(), name: newTodo, completed: false } });
    setNewTodo('');
  }

  return (
    <div className="App">
      <h1>React Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input name='name' placeholder='Add Todo Item' value={newTodo} onChange={handleInput} />
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  );
}

export default App;
