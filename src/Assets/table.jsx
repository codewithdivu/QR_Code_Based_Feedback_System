import React from "react";

const Table = ({ dataFile }) => {
  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>Mobile Number</th>
          <th>Ratings</th>
          <th>District</th>
          <th>Taluka</th>
          <th>Police_Station</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {dataFile?.map((item) => (
          <tr>
            {/* <tr className="active-row"> */}
            <td>{item?.phoneNumber}</td>
            <td>{item?.rating}</td>
            <td>{item?.selectedPoliceStation?.district}</td>
            <td>{item?.selectedPoliceStation?.taluka}</td>
            <td>{item?.selectedPoliceStation?.police}</td>
            <td>{item?.createdAt?.toDate().toDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
