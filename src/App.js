import React, { useState } from "react";
import TodoForm from "./components/toDoForm/TodoForm";
import TodoList from "./components/TodoList";
import { TodoItemsContext } from "./store/TodoItemsContext";


const App = () => {
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (content) => {
    const newTask = {
      id: Date.now(),
      content,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };
  console.log(tasks);
  // Function to delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  console.log(tasks);
  // Function to toggle task completion
  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  
  return (
    <div>
      <h1>Todo App</h1>
      <TodoItemsContext.Provider value={{
        tasks,
        addTask,
        deleteTask,
        toggleComplete
        }}>
        <TodoForm />
        <TodoList/>
      </TodoItemsContext.Provider>
    </div>
  );
};

export default App;
