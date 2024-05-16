import {
  Chart,
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from 'chart.js';
import { FC } from 'react';
import { Line } from 'react-chartjs-2';
import './ChartComponent.scss';

Chart.register(LinearScale, CategoryScale, PointElement, LineElement, Legend, Tooltip);

const ChartComponent: FC = () => {
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        hoverOffset: 4,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    responsive: true,
    maintainAspectRatio: true,
  };

  return <Line className="testchart" data={chartData} options={chartOptions} />;
};

export default ChartComponent;
