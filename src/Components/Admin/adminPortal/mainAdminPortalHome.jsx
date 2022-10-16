import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Table from "../../../Assets/table";
import { collections } from "../../../firebase/collections";
import { getAllUsers, getUsers } from "../../../firebase/services";
import { useFireStore } from "../../../hooks";
import Navbar from "./navbar";
import _ from "lodash";

const MainAdminPortalHome = () => {
  const { data, isLoading } = useFireStore(collections.USERS);
  const { negative, setNegative } = useState(0);
  const [newLoadedData, setNewLoadedData] = useState([]);

  const [order, setOrder] = useState("ASC");

  useEffect(() => {
    setNewLoadedData(data);
  }, [data]);

  const handleSort = (col) => {
    if (order === "ASC") {
      const sorted = _.orderBy(data, [col], ["asc"]);
      setNewLoadedData(sorted);
      console.log("sorted", sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = _.orderBy(data, [col], ["dsc"]);
      setNewLoadedData(sorted);
      console.log("sorted", sorted);
      setOrder("ASC");
    }
  };

  console.log("data,isLoading", data, isLoading);
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
              <i className="fa fa-solid fa-gauge"></i>
              <span className="text">Dashboard</span>
            </div>
            {/* return array.filter((v) => v === value).length */}
            <div className="boxes">
              <div className="box box1">
                <i className="fa fa-solid fa-jet-fighter-up  fa1"></i>
                <span className="text text1">Positive Reviews</span>
                <span className="number number1">
                  {data?.filter((item) => item?.rating >= 4)?.length}
                </span>
              </div>
              <div className="box box2">
                <i className="fa fa-solid fa-bicycle  fa2"></i>
                <span className="text text2">Negative Reviews</span>
                <span className="number number2">
                  {data?.filter((item) => item?.rating <= 2)?.length}
                </span>
              </div>
              <div className="box box3">
                <i className="fa-solid fa-car  fa3 "></i>
                <span className="text text3">Average Reviews </span>
                <span className="number number3">
                  {data?.filter((item) => item?.rating === 3)?.length}
                </span>
              </div>
            </div>
          </div>

          <div className="activity">
            <div className="title margin_title">
              <i className="fa fa-solid fa-clock"></i>
              <span className="text">Recent Activity</span>
            </div>

            <div className="activity-data">
              <Table handleSort={handleSort} dataFile={newLoadedData} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainAdminPortalHome;
