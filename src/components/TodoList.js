import React, { useContext, useState } from 'react';
import TodoItem from './toDoItem/TodoItem';
import { TodoItemsContext } from '../store/TodoItemsContext';

const TodoList = () => {
  const [filter, setFilter] = useState('all');
  
  const {tasks, toggleComplete} = useContext(TodoItemsContext);
  
 console.log(tasks);
// Filter tasks based on the selected filter value
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'pending') {
      return !task.completed;
    }
    return true;
  });
console.log(filteredTasks);
  return (
    <div>
      <div>
        Show:
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
      </div>
      <ul>
        {filteredTasks.map((task, id) => (
          <TodoItem
            key={id}
            task={task}
            toggleComplete={toggleComplete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
