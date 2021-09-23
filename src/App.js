
import './App.css';


import { useState } from 'react';
import Input from './Components/Input';


function App() {


  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);


  function handleInput(e) {
    setValue(e.target.value);
  }
   

  function handleSubmit(e) {
    e.preventDefault(); 
    setTodos([...todos, value]);
setValue ('');
  }
  

  return (
    <div className="App">
      <p>ToDo</p>
     
      <form >
       
      <Input handleInput={handleInput} handleSubmit={handleSubmit} value={value} />
      <ul className="TodoListe">
        {todos && todos.map((todo, index) => <li key={index} className='li'>
        <span >
          <input 
          type='checkbox' />
             &nbsp; 
      {todo} 
      &nbsp;
      </span>
      <button className='rm' >&times;</button>
          </li>)}
      </ul>
      </form>
    </div>
  );
}

export default App;
