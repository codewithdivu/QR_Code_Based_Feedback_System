import React from "react";
import SimpleLineChartReport from "../../Charts/simpleLineChartReport";

const Report = () => {
  return (
    <div className="reports">
      <div class="dash-title">
        <p>Feedback Management System</p>
        <hr />
      </div>
      {/* div.dash */}
       <div className="dash-content">
        <div className="overview">
          <div className="title">
          <i class="fa-solid fa-chart-pie"></i>
            <span className="text">Monthly Report</span>
          </div>
          
        </div>
      </div>
      
      <div className="">
        <SimpleLineChartReport />
      </div>
    </div>
  );
};

export default Report;
