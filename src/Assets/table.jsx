import { getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { collections } from "../firebase/collections";
import { useFireStore } from "../hooks";

const Table = ({ dataFile }) => {
  const { data, isLoading } = useFireStore(collections.USERS);
  const [tableData, setTableData] = useState(data);

  const handlePhone = () => {
    setTableData(data.sort((a, b) => (a.phoneNumber > b.phoneNumber ? 1 : -1)));
  };
  const handleRating = () => {
    setTableData(data.sort((a, b) => (a.rating > b.rating ? 1 : -1)));
  };

  const handleDist = () => {
    setTableData(data.sort((a, b) => a.district.compare(b.district)));
  };

  const handleTaluka = () => {
    setTableData(data.sort((a, b) => a.taluka.compare(b.taluka)));
  };
  const handleStation = () => {
    setTableData(data.sort((a, b) => a.station.compare(b.station)));
  };

  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th onClick={handlePhone}>Mobile Number</th>
          <th onClick={handleRating}>Ratings</th>
          <th onClick={handleDist}>District</th>
          <th onClick={handleTaluka}>Taluka</th>
          <th onClick={handleStation}>Police_Station</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {tableData?.map((item) => (
          <tr>
            {/* <tr className="active-row"> */}
            <td>{item?.phoneNumber}</td>
            <td>{item?.rating}</td>
            <td>
              {item?.selectedPoliceStation?.district?.split("_").join(" ")}
            </td>
            <td>{item?.selectedPoliceStation?.taluka?.split("_").join(" ")}</td>
            <td>{item?.selectedPoliceStation?.police?.split("_").join(" ")}</td>
            {/* <td>{item?.createdAt?.toDate().toDateString()}</td> */}
            <td>{item?.createdAt?.toDate()?.getDay()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
