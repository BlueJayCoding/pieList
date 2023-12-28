import React, { useState } from 'react';
import 'chart.js';
import PieChart from './PieChart'; 
import Tasks from './Tasks';
import {Chart,ArcElement} from 'chart.js';
Chart.register(ArcElement);

const App = () => {
  const initialTasks = [
    { id: 1, name: 'Task 1', status: 'Pending' },
    { id: 2, name: 'Task 2', status: 'Started' },
    { id: 3, name: 'Task 3', status: 'Completed' },
  ];

  const getTaskData = tasks => {
    const statusCount = tasks.reduce((count, task) => {
      count[task.status] = (count[task.status] || 0) + 1;
      return count;
    }, {});
    return Object.entries(statusCount).map(([status, count]) => ({ status, count }));
  };

  const [taskData, setTaskData] = useState(getTaskData(initialTasks));

  

  const handleTaskUpdate = updatedTasks => {
    setTaskData(getTaskData(updatedTasks));
  };

  return (
    <div className="App">
      <Tasks initialTasks={initialTasks} onUpdate={handleTaskUpdate} />
      <PieChart taskData={taskData} />
    </div>
  );
};

export default App;
