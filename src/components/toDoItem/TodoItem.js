import React from 'react';
import './TodoItem.css'; // Import the CSS file
import { useContext } from 'react';
import { TodoItemsContext } from '../../store/TodoItemsContext';
const TodoItem = ({ task }) => {
  const { id, content, completed } = task;

  const {deleteTask, toggleComplete} = useContext(TodoItemsContext);
 
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
