import { getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { collections } from "../firebase/collections";
import { useFireStore } from "../hooks";
import _ from "lodash";

const Table = ({ dataFile, handleSort }) => {
  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th onClick={() => handleSort("phoneNumber")}>Mobile Number</th>
          <th onClick={() => handleSort("rating")}>Ratings</th>
          <th onClick={() => handleSort("selectedPoliceStation.district")}>
            District
          </th>
          <th onClick={() => handleSort("selectedPoliceStation.taluka")}>
            Taluka
          </th>
          <th onClick={() => handleSort("selectedPoliceStation.police")}>
            Police_Station
          </th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {dataFile?.slice(0, 15)?.map((item) => (
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
