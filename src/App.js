
import './App.css';
import DatePicker from './Components/DatePicker.js'

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
    setValue("");
    
  }
  return (

    <div className="App">
      <DatePicker />
      <p>Test</p>
      
      <Input handleInput={handleInput} handleSubmit={handleSubmit} value = {value} />
      <ul className="TodoListe">
        {todos && todos.map((todo, index) => <li key={index}>{todo}</li>)}
      </ul>
    </div>
  );


}
export default App;




