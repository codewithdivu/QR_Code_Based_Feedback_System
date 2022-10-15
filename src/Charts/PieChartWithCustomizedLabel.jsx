import React, { useState } from "react";
import { Chart } from "react-google-charts";

const PieChartWithCustomizedLabel = ({questions}) => {
  const options = {
    title: questions,
    colors: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0", "#9966ff"],
  };
  const data = [
    ["Questions", "Stars"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"39vw"}
      height={"40vh"}
    />
  );
};

export default PieChartWithCustomizedLabel;
