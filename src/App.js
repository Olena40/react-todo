
import './App.css';


import { useState } from 'react';
import Input from './Components/Input'

function App() {


  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  function handleInput(e) {
    setValue(e.target.value);
    
  }
   

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, value]);
    
  }
  

  return (
    <div className="App">
      <p>Test</p>
      
      <Input handleInput={handleInput} handleSubmit={handleSubmit} />
      <ul className="TodoListe">
        {todos && todos.map((todo, index) => <li key={index}>{todo}</li>)}
      </ul>
    </div>
  );
}

export default App;
