import React from "react";

function Input({ handleInput, handleSubmit }) {
  return (
    <form >
      <input type="text" onChange={handleInput} />
      <input type="submit" onClick={handleSubmit} />
    </form>
  );
}
export default Input;
