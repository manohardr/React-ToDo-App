import React, { useState } from "react";
import "./TodoForm.css"; // Import the CSS file
import { useContext } from "react";
import { TodoItemsContext } from "../../store/TodoItemsContext";
const TodoForm = () => {
  const [task, setTask] = useState("");
  
  const {addTask} = useContext(TodoItemsContext);
// Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
          className="task-input"
        />
        <button type="submit" className="add-button">
          Add Task
        </button>
      </form>
    </>
  );
};

export default TodoForm;
