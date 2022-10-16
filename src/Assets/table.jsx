import { getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { collections } from "../firebase/collections";
import { useFireStore } from "../hooks";

const Table = ({ dataFile }) => {
  // const { data, isLoading } = useFireStore(collections.USERS);
  // const [newData, setNewData] = useState(dataFile.slice(0, 15));
  const [tableData, setTableData] = useState(dataFile);
  const [order, setOrder] = useState("ASC");

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...tableData]?.sort((a, b) =>
        a[col]?.toLowerCase() > b[col]?.toLowerCase() ? 1 : -1
      );
      setTableData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...tableData]?.sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setTableData(sorted);
      setOrder("ASC");
    }
  };

  const handleSort = () => {
    console.log("sorted...");
  };

  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th onClick={() => handleSort("phoneNumber")}>Mobile Number</th>
          <th onClick={() => handleSort("rating")}>Ratings</th>
          <th onClick={() => handleSort("district")}>District</th>
          <th onClick={() => handleSort("taluka")}>Taluka</th>
          <th onClick={() => handleSort("police")}>Police_Station</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {dataFile?.slice(0, 10)?.map((item) => (
          <tr>
            {/* <tr className="active-row"> */}
            <td>{item?.phoneNumber}</td>
            <td>{item?.rating}</td>
            <td>
              {item?.selectedPoliceStation?.district?.split("_").join(" ")}
            </td>
            <td>{item?.selectedPoliceStation?.taluka?.split("_").join(" ")}</td>
            <td>{item?.selectedPoliceStation?.police?.split("_").join(" ")}</td>
            <td>{item?.createdAt?.toDate().toDateString()}</td>
            {/* <td>{item?.createdAt?.toDate()?.getDay()}</td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
