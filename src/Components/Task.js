import React from "react";



 export function Task(props) {
  const { todo, removeTodo } = props;

  const handleRemoveClick = () => {
    removeTodo(todo.id);
  };

  return (
    <li className="Todo"  >
      <button
        aria-label="Remove todo"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{todo.text}</div>
    </li>
  );
}

export default Task;

