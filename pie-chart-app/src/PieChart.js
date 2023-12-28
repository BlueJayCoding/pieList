import React from 'react';
import 'chart.js';
import {Chart,ArcElement} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
Chart.register(ArcElement);

const PieChart = ({ taskData }) => {
  const chartData = {
    labels: taskData.map(task => task.status),
    datasets: [
      {
        data: taskData.map(task => task.count),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div>
      <h2>Task Status Pie Chart</h2>
      <Doughnut data={chartData} />
    </div>
  );
};

export default PieChart;
