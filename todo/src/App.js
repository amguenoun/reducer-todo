import React, { useState, useReducer } from 'react';
import moment from 'moment';

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
    dispatch({ type: 'ADD_TODO', payload: { id: Date.now(), name: newTodo, completed: false, timeCreated: moment().format('MMMM Do YYYY, h:mm:ss a'), timeCompleted: null } });
    setNewTodo('');
  }

  const handleComplete = (id) => {
    dispatch({ type: 'TOGGLE_COMPLETE', payload: { itemID: id } });
  }

  const handleClear = () => {
    dispatch({ type: 'CLEAR_COMPLETED' });
  }

  return (
    <div className="App">
      <h1>React Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input name='name' placeholder='Add Todo Item' value={newTodo} onChange={handleInput} />
        <button type='submit'>Add Todo</button>
      </form>
      <button className="clear-btn" onClick={handleClear}>Clear Completed</button>
      <div className="card-grid">
        {state.todoArray.map(item => <TodoCard key={item.id} todo={item} handleComplete={handleComplete} />)}
      </div>
    </div>
  );
}

export default App;
