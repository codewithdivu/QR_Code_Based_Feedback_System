import React, { useState } from "react";
import { Chart } from "react-google-charts";

const BarChart = ({ questions, data }) => {
  const options = {
    title: questions,
    chartArea: { width: "9%" },
  };
 
  return (
    <Chart
      chartType="Bar"
      data={data}
      options={options}
      width={"35vw"}
      height={"35vh"}
    />
  );
};

export default BarChart;
