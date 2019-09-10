import React, { useState, useReducer } from 'react';

//import reducer
import { initialState, todoReducer } from './reducers/todoReducer';

//import components
import TodoCard from './components/TodoCard';

//import stylesheets
import 'semantic-ui-css/semantic.min.css'
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

  const handleComplete = (id) => {
    dispatch({ type: 'TOGGLE_COMPLETE', payload: { id } });
  }

  return (
    <div className="App">
      <h1>React Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input name='name' placeholder='Add Todo Item' value={newTodo} onChange={handleInput} />
        <button type='submit'>Add Todo</button>
      </form>
      {state.todoArray.map(item => <TodoCard key={item.id} todo={item} handleComplete={handleComplete} />)}
    </div>
  );
}

export default App;
