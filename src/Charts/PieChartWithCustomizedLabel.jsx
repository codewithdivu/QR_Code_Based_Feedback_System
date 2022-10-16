import React, { useState } from "react";
import { Chart } from "react-google-charts";

const PieChartWithCustomizedLabel = ({ questions,data }) => {
  const options = {
    title: questions,
    colors: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0", "#9966ff"],
  };
  // const data = [
  //   ["Questions", "Stars"],
  //   ["Immediately", 11],
  //   ["In 5 mins", 2],
  //   ["In 10 mins", 2],
  //   ["In 15 mins", 2],
  //   ["More than 15 mins", 7],
  // ];

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
