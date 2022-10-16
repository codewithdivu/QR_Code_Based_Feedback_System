import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Table from "../../Assets/table";
import TableStation from "../../Assets/tableStation";
import { dk, newData } from "../../constants/districts";
import { collections } from "../../firebase/collections";
import { useFireStore } from "../../hooks";
import Navbar from "./adminPortal/navbar";

const Content = () => {
  const { data, isLoading } = useFireStore(collections.USERS);

  const [district, setDistrict] = useState("");
  const [taluka, setTaluka] = useState("");
  const [station, setStation] = useState("");

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const d = new Date();

  const [extractArray, setExtractArray] = useState([]);

  return (
    <>
      <section className="dashboard" id="12">
        <div className="dash-title">
          <p>Feedback Management System</p>
          <hr />
        </div>
        <div className="dash-content">
          <div className="overview">
            <div className="title">
              <i className="fa-solid fa-server"></i>
              <span className="text">Content Overview</span>
            </div>

            <div className="boxes boxes_content">
              <div className="box box1">
                <i className="fa fa-solid fa-jet-fighter-up"></i>
                <span className="text">Total Reviews</span>
                <span className="number">{data?.length}</span>
              </div>
            </div>
          </div>
          <div className="activity">
            <div className="title">
              <i className="fa fa-solid fa-people-group"></i>
              <span className="text">Select police station</span>
            </div>

            {/* here will come dropdown  */}
            <div>
              <div className="district">
                <select
                  className="district__1"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  // disabled={selectedStation}
                >
                  <option value="">Select District</option>
                  {dk.map((dist) => (
                    <option value={dist.value} className="option__forform">
                      {dist.label}
                    </option>
                  ))}
                </select>
              </div>
              {district && (
                <div className="district__taluko">
                  <select
                    className="district__taluko1"
                    onChange={(e) => setTaluka(e.target.value)}
                    // disabled={selectedStation}
                  >
                    <option value="">Select Taluka</option>
                    {dk
                      ?.find((obj) => obj?.value === district)
                      ?.talukas?.map((taluko) => (
                        <option
                          value={taluko.value}
                          className="option__forform"
                        >
                          {taluko.label}
                        </option>
                      ))}
                  </select>
                </div>
              )}
              {district && taluka && (
                <div className="district__police">
                  <select
                    className="district__police1"
                    onChange={({ target }) => setStation(target.value)}
                    // disabled={selectedStation}
                  >
                    <option value="">Select Station</option>x
                    {dk
                      ?.find((obj) => obj?.value === district)
                      ?.talukas?.find((obj) => obj?.value === taluka)
                      ?.stations?.map((police) => (
                        <option
                          value={police.value}
                          className="option__forform"
                        >
                          {police.label}
                        </option>
                      ))}
                  </select>
                </div>
              )}
            </div>
            <div className="activity-data">
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
                  {data
                    .sort(
                      (a, b) =>
                        new Date(b.item?.createdAt?.toDate()) -
                        new Date(a.item?.createdAt?.toDate())
                    )
                    ?.filter((x) => x?.selectedPoliceStation?.taluka === taluka)
                    ?.map((item) => (
                      <tr>
                        {/* <tr className="active-row"> */}
                        <td>{item?.phoneNumber}</td>
                        <td>{item?.rating}</td>
                        <td>
                          {item?.selectedPoliceStation?.district
                            ?.split("_")
                            .join(" ")}
                        </td>
                        <td>
                          {item?.selectedPoliceStation?.taluka
                            ?.split("_")
                            .join(" ")}
                        </td>
                        <td>
                          {item?.selectedPoliceStation?.police
                            ?.split("_")
                            .join(" ")}
                        </td>
                        <td>{item?.createdAt?.toDate().toDateString()}</td>
                        {/* <td>{item?.createdAt?.toDate()?.getDay()}</td> */}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            {/* calendar wise  */}

            <div className="title">
              <i className="fa fa-solid fa-calendar"></i>
              <span className="text">Select Date </span>
            </div>

            <div className="calender">
              <div className="datefrom">
                <input
                  className="datefrom1"
                  type="date"
                  onChange={(event) => setStartDate(event.target.value)}
                />
              </div>
              <p className="fordatep">TO</p>
              <div className="dateto">
                <input
                  className="dateto1"
                  type="date"
                  onChange={(event) => setEndDate(event.target.value)}
                />
              </div>
            </div>

            <div className="download_btn btn">
              <button className="extract_data_btn">Extract Data</button>
            </div>

            <div className="activity-data">
              <Table dataFile={data} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
