import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const generateChartData = (question) => {
  const total = question.tot;
  const data = {
    labels: [""],
    datasets: [
      {
        label: "Strongly Disagree",
        data: [(question.sd / total) * 100],
        backgroundColor: "#d73027",
      },
      {
        label: "Disagree",
        data: [(question.d / total) * 100],
        backgroundColor: "#fc8d59",
      },
      {
        label: "Neutral",
        data: [(question.n / total) * 100],
        backgroundColor: "#fee090",
      },
      {
        label: "Agree",
        data: [(question.a / total) * 100],
        backgroundColor: "#91bfdb",
      },
      {
        label: "Strongly Agree",
        data: [(question.sa / total) * 100],
        backgroundColor: "#4575b4",
      },
    ],
  };
  return data;
};

const QuestionChart = ({ question, chartHeight = 300 }) => {
  const options = {
    indexAxis: "y",
    height: chartHeight,
    scales: {
      x: {
        stacked: true,
        max: 100,
        title: {
          display: true,
          text: "Percentage of Responses",
        },
      },
      y: {
        stacked: true,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw.toFixed(1);
            return `${context.dataset.label}: ${value}%`;
          },
        },
      },
      legend: {
        position: "bottom",
      },
    },
  };
  return (
    <div>
      <p className="text-xl underline">{question.description}</p>
      {/* <Bar data={generateChartData(question)} options={options} /> */}
      <div style={{ height: `${chartHeight}px`, width: "100%" }}>
        <Bar data={generateChartData(question)} options={options} />
      </div>
      <div>
        <p>Mean: {question.mu.toFixed(2)}</p>
        <p>Median: {question.med.toFixed(2)}</p>
        <p>Standard Deviation: {question.sig.toFixed(2)}</p>
        <p>Total Responses: {question.tot}</p>
      </div>
    </div>
  );
};

export default QuestionChart;
