import React from "react";

const QuestionTable = (questions) => {
  return (
    <>
      {questions?.map((question) => (
        <div className="twocharts">
          <div className="chart">
            <div id="piechart1" style={{ width: "39vw", height: "40vh" }}></div>
          </div>
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th colspan="2">{question.label}</th>
                </tr>
              </thead>
              <tbody>
                {question?.options((option) => (
                  <tr>
                    <td>{option}</td>
                    <td>12</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </>
  );
};

export default QuestionTable;
