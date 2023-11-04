import React from "react";
import LineChartConnectNulls from "../../Charts/LineChartConnectNulls";
import NewChartsTable from "../../Charts/newChartsTable";
import QuestionTable from "../../Charts/questionTable";
import { questions } from "../../constants/questions";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";
import PieChartWithCustomizedLabel from "../../Charts/PieChartWithCustomizedLabel";
import {
  data1,
  data2,
  data4,
  data5,
  dataEmoji,
  dataYesNo1,
  dataYesNo2,
} from "../../constants/newConstans";

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
            <div>
              <i className="fa fa-solid fa-magnifying-glass-chart"></i>
              <span className="text">Analytics</span>
            </div>
            <div>
              <select name="option" className="selectClass" id="i">
                Charts
                <option className="optionClass" value="">
                  Charts and pie{" "}
                </option>
                <option className="optionClass" value="">
                  Bar and analytics{" "}
                </option>
              </select>
            </div>
          </div>
          <div className="charts">
            <div className="twocharts">
              <div className="chart" id="Piecharts">
                <PieChartWithCustomizedLabel
                  data={data1}
                  questions={"Q1. Reason of visiting police station ?"}
                />
              </div>
              <div className="table">
                <table className="">
                  <thead>
                    <tr>
                      <th colSpan="3">
                        Q1. Reason of visiting police station ?
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Theft</td>
                      <td> 12 </td>
                    </tr>
                    <tr>
                      <td>Harrasement</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td>Legal issue...</td>
                      <td>9</td>
                    </tr>
                    <tr>
                      <td>Others</td>
                      <td>8</td>
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
                    " Q.2 After how much time you were heard in police station?"
                  }
                />
              </div>
              <div className="table">
                <table className="">
                  <thead>
                    <tr>
                      <th colSpan="2">
                        Q.2 After how much time you were heard in police
                        station?
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Immediately</td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>0-10 minutes</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td>10-20 minutes</td>
                      <td>9</td>
                    </tr>
                    <tr>
                      <td>More than 20 minutes</td>
                      <td>8</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="twocharts">
              <div className="chart">
                <PieChartWithCustomizedLabel
                  data={dataYesNo1}
                  questions={
                    "  Q3. Was a police officer readily available at the station when you visited or contacted it?"
                  }
                />
              </div>
              <div className="table">
                <table className="">
                  <thead>
                    <tr>
                      <th colSpan="2">
                        Q3. Was a police officer readily available at the
                        station when you visited or contacted it?
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Yes</td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>No</td>
                      <td>10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="twocharts">
              <div className="chart">
                <PieChartWithCustomizedLabel
                  data={dataYesNo2}
                  questions={
                    "  Q4. Were your concerns or issues resolved to your satisfaction by the police station?"
                  }
                />
              </div>
              <div className="table">
                <table className="">
                  <thead>
                    <tr>
                      <th colSpan="2">
                        Q4. Were your concerns or issues resolved to your
                        satisfaction by the police station?
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Yes</td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>No</td>
                      <td>10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="twocharts">
              <div className="chart">
                <PieChartWithCustomizedLabel
                  data={dataEmoji}
                  questions={
                    " Q5. How satisfied are you with the responsiveness, lanugage and communication of the police station staff?"
                  }
                />
              </div>
              <div className="table">
                <table className="">
                  <thead>
                    <tr>
                      <th colSpan="2">
                        Q5. How satisfied are you with the responsiveness,
                        lanugage and communication of the police station staff?
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Very Bad</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>Bad</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>Good</td>
                      <td>8</td>
                    </tr>
                    <tr>
                      <td>Very Good</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td>Excellent</td>
                      <td>12</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="twocharts">
              <div className="chart">
                <PieChartWithCustomizedLabel
                  data={dataEmoji}
                  questions={
                    " Q6. How would you rate the fairness and respectfulness of your treatment during your interactions with the police station?"
                  }
                />
              </div>
              <div className="table">
                <table className="">
                  <thead>
                    <tr>
                      <th colSpan="2">
                        Q6. How would you rate the fairness and respectfulness
                        of your treatment during your interactions with the
                        police station?{" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Very Bad</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>Bad</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>Good</td>
                      <td>8</td>
                    </tr>
                    <tr>
                      <td>Very Good</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td>Excellent</td>
                      <td>12</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="twocharts">
              <div className="chart">
                <PieChartWithCustomizedLabel
                  data={dataEmoji}
                  questions={
                    "Q7. Were you satisfied with the cleanliness and organization of the police station?"
                  }
                />
              </div>
              <div className="table">
                <table className="">
                  <thead>
                    <tr>
                      <th colSpan="2">
                        Q7. Were you satisfied with the cleanliness and
                        organization of the police station?
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Very Bad</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>Bad</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>Good</td>
                      <td>8</td>
                    </tr>
                    <tr>
                      <td>Very Good</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td>Excellent</td>
                      <td>12</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="twocharts">
              <div className="chart">
                <PieChartWithCustomizedLabel
                  data={dataEmoji}
                  questions={
                    "Q8.  How would you rate the effectiveness of problem resolution by the police station?"
                  }
                />
              </div>
              <div className="table">
                <table className="">
                  <thead>
                    <tr>
                      <th colSpan="2">
                        Q8. How would you rate the effectiveness of problem
                        resolution by the police station?
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Very Bad</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>Bad</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>Good</td>
                      <td>8</td>
                    </tr>
                    <tr>
                      <td>Very Good</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td>Excellent</td>
                      <td>12</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="twocharts">
              <div className="chart">
                <PieChartWithCustomizedLabel
                  data={dataEmoji}
                  questions={
                    "Q9. How safe do you feel when visiting the police station?"
                  }
                />
              </div>
              <div className="table">
                <table className="">
                  <thead>
                    <tr>
                      <th colSpan="2">
                        Q9. How safe do you feel when visiting the police
                        station?
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Very Bad</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>Bad</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>Good</td>
                      <td>8</td>
                    </tr>
                    <tr>
                      <td>Very Good</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td>Excellent</td>
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
