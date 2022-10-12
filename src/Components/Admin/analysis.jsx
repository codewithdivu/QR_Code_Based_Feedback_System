import React from "react";
import LineChartConnectNulls from "../../Charts/LineChartConnectNulls";

const Analysis = () => {
  return (
    <div className="analytics">
      <div class="dash-title">
        <p>Feedback Management System</p>
        <hr />
      </div>
      <LineChartConnectNulls />
    </div>
  );
};

export default Analysis;
