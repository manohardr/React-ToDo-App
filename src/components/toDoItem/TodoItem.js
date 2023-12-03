import React from 'react';
import './TodoItem.css'; // Import the CSS file

const TodoItem = ({ task, deleteTask, toggleComplete }) => {
  const { id, content, completed } = task;

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleComplete(id)}
      />
      <span className={completed ? 'completed' : ''}>{content}</span>
      <button onClick={() => deleteTask(id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
