
import React from 'react'


function Input({ handleInput, handleSubmit, value }) {
  return (
    <form >
      <input type="text" value = {value} onChange={handleInput} />
      <input type="submit" onClick={handleSubmit} />
    </form>
  );
}
export default Input;


