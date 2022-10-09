import React from "react";
import { Link } from "react-router-dom";

const Table2 = ({ dataFile }) => {
  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>District</th>
          <th>Taluko</th>
          <th>PoliceStation</th>
          <th>QR-code</th>
        </tr>
      </thead>
      <tbody>
        {dataFile?.map((item) => (
          <tr>
            <td>{item?.district}</td>
            <td>{item?.taluka}</td>
            <td>{item?.station}</td>
            <td>
              <a href={item?.qrValue}>{item?.qrValue}</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table2;
