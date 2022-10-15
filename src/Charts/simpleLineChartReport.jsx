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
      positive: 4000,
      negative: 2400,
      average: 2400,
    },
    {
      name: "Week 2",
      positive: 3000,
      negative: 1398,
      average: 2210,
    },
    {
      name: "Week 3",
      positive: 2000,
      negative: 9800,
      average: 2290,
    },
    {
      name: "Week 4",
      positive: 2780,
      negative: 3908,
      average: 2000,
    },
  ];

  console.log("charts....slsd");

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
