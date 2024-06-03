import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend,
);

const directors = [
  {
    title: "600% More Productive than online Courses",
    num: "600%",
    chartData: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          data: [20, 22, 24, 28, 32, 35],
          borderColor: "#3055cf",
          backgroundColor: "rgba(59, 130, 246, 0.2)",
          tension: 0.1,
          fill: true,
        },
      ],
    },
  },
  {
    title: "Jobs Available for Developers",
    num: "562",
    chartData: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          data: [500, 520, 550, 570, 600, 630],
          borderColor: "#3055cf",
          backgroundColor: "rgba(59, 130, 246, 0.2)",
          tension: 0.1,
          fill: true,
        },
      ],
    },
  },
  {
    title: "New Developers within the Market",
    num: "300",
    chartData: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          data: [50, 60, 70, 90, 120, 150],
          borderColor: "#3055cf",
          backgroundColor: "rgba(59, 130, 246, 0.2)",
          tension: 0.1,
          fill: true,
        },
      ],
    },
  },
  {
    title: "Average Salaries",
    num: (
      <>
        $80K<span className="text-sm pl-2">/ year</span>
      </>
    ),
    chartData: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          data: [70, 72, 75, 78, 80, 82],
          borderColor: "#3055cf",
          backgroundColor: "rgba(59, 130, 246, 0.2)",
          tension: 0.1,
          fill: true,
        },
      ],
    },
  },
];

const chartOptions = {
  maintainAspectRatio: false,
  scales: {
    x: { display: false },
    y: { display: false },
  },
  plugins: {
    legend: { display: false },
  },
  elements: {
    point: { radius: 0 },
  },
};

const Charts = () => (
  <div className="w-screen max-w-[1400px]">
    <div className="grid grid-cols-4 max-[1100px]:grid-cols-2 max-[560px]:grid-cols-1 max-w-[1440px] w-full m-auto gap-12 text-center mx-auto pt-10">
      {directors.map(({ title, chartData, num }, index) => (
        <div
          key={index}
          className="relative bg-purple-800/20 p-3 min-h-32 hover:shadow-[0_0_.5rem_0rem_rgba(251,53,208,1)] transition-all shadow-[0_0_0_0_rgba(255,255,255,1)] cursor-pointer hover:scale-105 flex flex-col justify-between rounded-lg overflow-hidden text-white"
        >
          <h2 className="text-lg z-10">{title}</h2>
          <span className="font-bold z-10 text-7xl">{num}</span>
          <div className="absolute h-full w-full top-0 left-0 -z-10">
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Charts;
