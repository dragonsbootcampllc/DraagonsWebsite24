import React from "react";
import RadarData from "./RadarData";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

const RadarOptions = {
  borderWidth: 3,
  Filler: {
    propagate: true,
  },
  responsive: true,

  scale: {
    gridLines: {
      lineWidth: 2,
      color: "#97ba7b",
      circular: true,
    },

    ticks: {
      display: false,
    },
    angleLines: {
      color: "#fff",
      lineWidth: 3,
      borderColor: "#fff",
    },
  },
};
ChartJS.defaults.font.size = 15;
ChartJS.defaults.font.family = "sans-serif";
ChartJS.defaults.font.color = "#97ba7b";
ChartJS.defaults.font.lineHeight = 1.2;
ChartJS.defaults.color = "white";
ChartJS.defaults.borderColor = "#ffffff85";
ChartJS.defaults.borderWidth = 2;

class RadarChart extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.chartRef);
  }

  render() {
    return (
      <div className="h-[280px] w-[280px]   p-4 text-w lg:h-96 lg:w-96">
        <Radar ref={this.chartRef} data={RadarData} options={RadarOptions} />
      </div>
    );
  }
}

export default RadarChart;
