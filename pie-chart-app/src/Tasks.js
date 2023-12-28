import React, { useState } from 'react'; 

const Tasks = ({ initialTasks, onUpdate }) => {
  const [tasks, setTasks] = useState(initialTasks);

  const updateStatus = (taskId, newStatus) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
    onUpdate(updatedTasks);
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.name} - {task.status}{' '}
            <select
              value={task.status}
              onChange={e => updateStatus(task.id, e.target.value)}
            >
              <option value="Pending">Pending</option>
              <option value="Started">Started</option>
              <option value="Completed">Completed</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;