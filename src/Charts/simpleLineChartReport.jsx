import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const SimpleLineChartReport = () => {
  const data = [
    {
      name: "Week 1",
      positive: 40,
      negative: 24,
      average: 24,
    },
    {
      name: "Week 2",
      positive: 30,
      negative: 13,
      average: 22,
    },
    {
      name: "Week 3",
      positive: 20,
      negative: 98,
      average: 22,
    },
    {
      name: "Week 4",
      positive: 27,
      negative: 39,
      average: 20,
    },
  ];

  // console.log("charts....slsd");

  return (
    <LineChart
      width={900}
      height={500}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      style={{
        textAlign: "center",
        marginTop: "100px",
        marginLeft: "200px",
      }}
    >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="negative"
        stroke="#36a2eb"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="positive" stroke="#ff3684" />
      <Line type="monotone" dataKey="average" stroke="#ffce56" />
    </LineChart>
  );
};

export default SimpleLineChartReport;
