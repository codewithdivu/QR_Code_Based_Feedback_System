import React from "react";
import LineChartConnectNulls from "../../Charts/LineChartConnectNulls";
import NewChartsTable from "../../Charts/newChartsTable";
import QuestionTable from "../../Charts/questionTable";
import { questions } from "../../constants/questions";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";
import PieChartWithCustomizedLabel from "../../Charts/PieChartWithCustomizedLabel";
import { data1, data2, data4, data5 } from "../../constants/newConstans";

const Analysis = () => {
  return (
    <div className="analytics">
      <div className="dash-title">
        <p>Feedback Management System</p>
        <hr />
      </div>
      <div className="dash-content">
        <div className="overview">
          <div className="title">
            <i className="fa fa-solid fa-magnifying-glass-chart"></i>
            <span className="text">Analytics</span>
          </div>
          <div className="charts">
            <div className="twocharts">
              <div className="chart" id="Piecharts">
                <PieChartWithCustomizedLabel
                  data={data1}
                  questions={
                    "After how much time you were heard in Police Station ?"
                  }
                />
              </div>
              <div className="table">
                <table className="">
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
            <div className="twocharts">
              <div className="chart">
                <PieChartWithCustomizedLabel
                  data={data2}
                  questions={
                    " How would you rate the attentiveness of the policemen towards your complaints?"
                  }
                />
              </div>
              <div className="table">
                <table className="">
                  <thead>
                    <tr>
                      <th colspan="2">
                        How would you rate the attentiveness of the policemen
                        towards your complaints?
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>One Star</td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>Two Star</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td>Three Star</td>
                      <td>9</td>
                    </tr>
                    <tr>
                      <td>Four Star</td>
                      <td>8</td>
                    </tr>
                    <tr>
                      <td>Five Star</td>
                      <td>10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="twocharts">
              <div className="chart">
                <PieChartWithCustomizedLabel
                  data={data2}
                  questions={
                    "  How would you rate the cleanliness of the Police Station ?"
                  }
                />
              </div>
              <div className="table">
                <table className="">
                  <thead>
                    <tr>
                      <th colspan="2">
                        How would you rate the cleanliness of the Police Station
                        ?
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>One Star</td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>Two Star</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td>Three Star</td>
                      <td>9</td>
                    </tr>
                    <tr>
                      <td>Four Star</td>
                      <td>8</td>
                    </tr>
                    <tr>
                      <td>Five Star</td>
                      <td>10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="twocharts">
              <div className="chart">
                <PieChartWithCustomizedLabel
                  data={data4}
                  questions={
                    "  How would you rate the language tone used by the policemen with you ?"
                  }
                />
              </div>
              <div className="table">
                <table className="">
                  <thead>
                    <tr>
                      <th colspan="2">
                        How would you rate the language tone used by the
                        policemen with you ?
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>One Star</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td>Two Star</td>
                      <td>11</td>
                    </tr>
                    <tr>
                      <td>Three Star</td>
                      <td>9</td>
                    </tr>
                    <tr>
                      <td>Four Star</td>
                      <td>14</td>
                    </tr>
                    <tr>
                      <td>Five Star</td>
                      <td>10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="twocharts">
              <div className="chart">
                <PieChartWithCustomizedLabel
                  data={data5}
                  questions={
                    " How would you rate the overall experience at Police Station ?"
                  }
                />
              </div>
              <div className="table">
                <table className="">
                  <thead>
                    <tr>
                      <th colspan="2">
                        How would you rate the overall experience at Police
                        Station ?
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>One Star</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>Two Star</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>Three Star</td>
                      <td>8</td>
                    </tr>
                    <tr>
                      <td>Four Star</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td>Five Star</td>
                      <td>12</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
