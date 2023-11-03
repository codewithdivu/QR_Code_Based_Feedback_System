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
          <th
            onClick={() => handleSort("phoneNumber")}
            style={{ cursor: "pointer" }}
          >
            Mobile Number
          </th>
          <th
            onClick={() => handleSort("rating")}
            style={{ cursor: "pointer" }}
          >
            Ratings
          </th>
          <th
            onClick={() => handleSort("selectedPoliceStation.district")}
            style={{ cursor: "pointer" }}
          >
            District
          </th>
          <th
            onClick={() => handleSort("selectedPoliceStation.taluka")}
            style={{ cursor: "pointer" }}
          >
            Taluka
          </th>
          <th
            onClick={() => handleSort("selectedPoliceStation.police")}
            style={{ cursor: "pointer" }}
          >
            Police_Station
          </th>
          <th style={{ cursor: "pointer" }}>Date</th>
        </tr>
      </thead>
      <tbody>
        {dataFile?.slice(0, 15)?.map((item) => (
          <tr>
            <td>{item?.phoneNumber}</td>
            <td>{item?.rating}</td>
            <td>
              {item?.selectedPoliceStation?.district?.split("_").join(" ")}
            </td>
            <td>{item?.selectedPoliceStation?.taluka?.split("_").join(" ")}</td>
            <td>{item?.selectedPoliceStation?.police?.split("_").join(" ")}</td>
            <td>{item?.createdAt?.toDate().toDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
