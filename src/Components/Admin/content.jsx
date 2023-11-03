import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Table from "../../Assets/table";
import TableStation from "../../Assets/tableStation";
import { dk, newData } from "../../constants/districts";
import { collections } from "../../firebase/collections";
import { useFireStore } from "../../hooks";
import Navbar from "./adminPortal/navbar";
import moment from "moment-mini";


const Content = () => {
  const { data, isLoading } = useFireStore(collections.USERS);

  const [district, setDistrict] = useState("");
  const [taluka, setTaluka] = useState("");
  const [station, setStation] = useState("");

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const d = new Date();
  const [extractData, setExtractData] = useState([]);

  useEffect(() => {
    setExtractData(data);
  }, [data]);

  const handleExtract = () => {
    // console.log("extracting....");
    // extractData.sort(function compare(a, b) {
    //   var dateA = new Date(a.date);
    //   var dateB = new Date(b.date);
    //   return dateA - dateB;
    // });
    const newData = extractData.filter(
      (item) =>
        moment(item.createdAt.toDate()).format("MMM DD YYYY") >
          moment(startDate).format("MMM DD YYYY") &&
        moment(item.createdAt.toDate()).format("MMM DD YYYY") <
          moment(endDate).format("MMM DD YYYY")
    );
    setExtractData(newData);
    // console.log("newData", newData);
    // console.log("startDate :>> ", moment(startDate).format("MMM DD YYYY"));
    // console.log("endDate", moment(endDate).format("MMM DD YYYY"));
    // console.log(
    //   "extractData :>> ",
    //   moment(extractData[0].createdAt.toDate()).format("MMM DD YYYY")
    // );
  };

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
              {taluka && (
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
                      ?.filter(
                        (x) => x?.selectedPoliceStation?.taluka === taluka
                      )
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
              )}
            </div>
            {taluka && (
              <div className="extra_data">
                <div className="boxes">
                  <div className="box box1">
                    <i className="fa fa-solid fa-jet-fighter-up  fa1"></i>
                    <span className="text text1">Positive Reviews</span>
                    <span className="number number1">
                      {
                        data
                          ?.filter(
                            (x) => x?.selectedPoliceStation?.taluka === taluka
                          )
                          .filter((item) => item?.rating >= 4)?.length
                      }
                    </span>
                  </div>
                  <div className="box box2">
                    <i className="fa fa-solid fa-bicycle  fa2"></i>
                    <span className="text text2">Negative Reviews</span>
                    <span className="number number2">
                      {
                        data
                          ?.filter(
                            (x) => x?.selectedPoliceStation?.taluka === taluka
                          )
                          .filter((item) => item?.rating <= 3)?.length
                      }
                    </span>
                  </div>
                  <div className="box box3">
                    <i className="fa-solid fa-car  fa3 "></i>
                    <span className="text text3">Total Reviews </span>
                    <span className="number number3">
                      {
                        data?.filter(
                          (x) => x?.selectedPoliceStation?.taluka === taluka
                        ).length
                      }
                    </span>
                  </div>
                </div>
              </div>
            )}

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
              <button onClick={handleExtract} className="extract_data_btn">
                Extract Data
              </button>
            </div>

            <div className="activity-data">
              {extractData && <Table dataFile={extractData} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
