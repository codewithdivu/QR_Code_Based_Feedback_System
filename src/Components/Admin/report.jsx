import React from "react";
import LineChartConnectNulls from "../../Charts/LineChartConnectNulls";

const Report = () => {
  return (
    <div className="reports">
      <div class="dash-title">
        <p>Feedback Management System</p>
        <hr />
      </div>
      <LineChartConnectNulls />
    </div>
  );
};

export default Report;
