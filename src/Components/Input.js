

import React from 'react'
import { FcPlus } from 'react-icons/fc';
import {  GoDiffAdded } from 'react-icons/go';



function Input({ handleInput, handleSubmit, value }) {
  return (
    <form  id='form' >
     <div><input id ='inp' type="text" value = {value} onChange={handleInput}  /></div>
      
      <div>
      <span>  < FcPlus size={30} color='green' onClick={handleSubmit } />  </span> 
      </div>
    </form>
  );
}

export default Input;


