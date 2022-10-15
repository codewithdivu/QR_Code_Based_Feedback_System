import React from "react";
import LineChartConnectNulls from "../../Charts/LineChartConnectNulls";
import NewChartsTable from "../../Charts/newChartsTable";
import QuestionTable from "../../Charts/questionTable";
import { questions } from "../../constants/questions";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";

const Analysis = () => {
  return (
    <div className="analytics">
      <div className="dash-title">
        <p>Feedback Management System</p>
        <hr />
      </div>
      {/* <div>Graphs</div> */}
      <div className="charts">
        <div class="twocharts">
          <div class="chart">
            <div id="piechart1" style={{ width: "39vw", height: "40vh" }}></div>
          </div>
          <div class="table">
            <table>
              <thead>
                <tr>
                  <th colspan="2">
                    After how much time you were heard in Police Station ?
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Immediately</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>In 5 mins</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>In 10 mins</td>
                  <td>9</td>
                </tr>
                <tr>
                  <td>In 15 mins</td>
                  <td>8</td>
                </tr>
                <tr>
                  <td>More than 15 mins</td>
                  <td>10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
