import React, { useState } from "react";
import { Chart } from "react-google-charts";

const PieChartWithCustomizedLabel = ({ questions,data }) => {
  const options = {
    title: questions,
    colors: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0", "#9966ff"],
  };
  

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
