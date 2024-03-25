import React, { useEffect, useState } from "react";
import { fetchDailyData } from "./data";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  const [dailyData, setDailyData] = useState([]);

  const fetchApi = async () => {
    const dailyData = await fetchDailyData();
    setDailyData(dailyData);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) =>
          new Date(date).toLocaleDateString()
        ),
        datasets: [
          {
            data: dailyData.map((data) => data.confirmed),
            label: "Infected",
            borderColor: "rgb(0, 217, 255)",
            fill: true,
          },
          {
            data: dailyData.map((data) => data.deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgb(255, 0, 0)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return (
    <>
      <div>{lineChart}</div>
    </>
  );
};

export default LineChart;