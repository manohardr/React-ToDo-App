import React, { useState } from 'react';
import TodoItem from './toDoItem/TodoItem';

const TodoList = ({ tasks, deleteTask, toggleComplete }) => {
  const [filter, setFilter] = useState('all');
  
// Filter tasks based on the selected filter value
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'pending') {
      return !task.completed;
    }
    return true;
  });

  return (
    <div>
      <div>
        Show:
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
