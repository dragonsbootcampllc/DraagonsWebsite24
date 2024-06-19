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
    title: "of all Jobs are remote",
    num: "50%",
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
    num: "1.5M",
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
    num: "695k",
    chartData: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          data: [20, 30, 23, 49, 60, 100],
          borderColor: "#3055cf",
          backgroundColor: "rgba(59, 130, 246, 0.2)",
          tension: 0.1,
          fill: true,
        },
      ],
    },
  },
  {
    title: "Average Salaries ",
    num: (
      <>
        $80K
      </>
    ),
    chartData: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          data: [30, 42, 75, 68, 80, 92],
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
  <div className="w-screen max-w-[1100px]">
    <div className="grid grid-cols-4 max-[1000px]:grid-cols-2   max-[560px]:grid-cols-1 max-w-[1440px] w-full m-auto gap-12 text-center mx-auto pt-10">
      {directors.map(({ title, chartData, num }, index) => (
        <div
          key={index}
          className="relative  bg-purple-800/20 p-3 min-h-20  hover:shadow-[0_0_.5rem_0rem_rgba(251,53,208,1)] transition-all shadow-[0_0_0_0_rgba(255,255,255,1)] cursor-pointer hover:scale-105 flex flex-col  justify-between rounded-3xl overflow-hidden text-white"
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
