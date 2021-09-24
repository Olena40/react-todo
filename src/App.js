
import './App.css';
import DatePicker from './Components/DatePicker.js'

import { useState } from 'react';
import Input from './Components/Input';
import { FcPlus } from 'react-icons/fc';



function App() {
 

  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);


  function handleInput(e) {
    setValue(e.target.value);
  }
   
  function handleSubmit(e) {
    e.preventDefault(); 
     
    if (value) {
      setTodos([...todos, value]);
      setValue("");
    } else {
      alert("Please fill in the blanks");
    }
  };
  
  //
  
  return (

    <div className="App">

     <form>
 
      <DatePicker />
      <p>ToDo</p>
    
      <Input handleInput={handleInput} handleSubmit={handleSubmit} value = {value} />

      <ul className="TodoListe">
        {todos && todos.map((todo, index) => <li key={index}  className='li'    >
        <span >
          <input 
          type='checkbox'  />
             &nbsp; &nbsp; 
     <del> {todo}   </del> 
      &nbsp;
      </span>

      &nbsp;
      <button className='rm' >&times;</button>
          </li>)}
      </ul>

      </form>
    </div>
  );


}

export default App;

