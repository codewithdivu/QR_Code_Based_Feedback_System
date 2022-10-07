import React from "react";
import { Link } from "react-router-dom";
import { collections } from "../../../firebase/collections";
import { getAllUsers, getUsers } from "../../../firebase/services";
import { useFireStore } from "../../../hooks";
import Navbar from "./navbar";

const MainAdminPortalHome = () => {
  const { data, isLoading } = useFireStore(collections.USERS);

  console.log("data,isLoading", data, isLoading);
  return (
    <>
      <section class="dashboard" id="12">
        <div class="dash-title">
          <p>Feedback Management System</p>
          <hr />
        </div>
        <div class="dash-content">
          <div class="overview">
            <div class="title">
              <i class="fa fa-solid fa-gauge"></i>
              <span class="text">Dashboard</span>
            </div>

            <div class="boxes">
              <div class="box box1">
                <i class="fa fa-solid fa-jet-fighter-up  fa1"></i>
                <span class="text text1">Positive Reviews</span>
                <span class="number number1">50,120</span>
              </div>
              <div class="box box2">
                <i class="fa fa-solid fa-bicycle  fa2"></i>
                <span class="text text2">Negative Reviews</span>
                <span class="number number2">20,120</span>
              </div>
              <div class="box box3">
                <i class="fa-solid fa-car  fa3 "></i>
                <span class="text text3">Average Reviews </span>
                <span class="number number3">10,120</span>
              </div>
            </div>
          </div>

          <div class="activity">
            <div class="title">
              <i class="fa fa-solid fa-clock"></i>
              <span class="text">Recent Activity</span>
            </div>

            <div class="activity-data">
              <div class="data mobile_num_data">
                <span class="data-title">Mobile no</span>
                <span class="data-list">9428532632</span>
                <span class="data-list">9428532632</span>
                <span class="data-list">9428532632</span>
                <span class="data-list">9428532632</span>
                <span class="data-list">9428532632</span>
                <span class="data-list">9428532632</span>
                <span class="data-list">9428532632</span>
              </div>
              <div class="data Environment">
                <span class="data-title">Environment Rating</span>
                <span class="data-list">2 star</span>
                <span class="data-list">2 star</span>
                <span class="data-list">2 star</span>
                <span class="data-list">2 star</span>
                <span class="data-list">2 star</span>
                <span class="data-list">2 star</span>
                <span class="data-list">2 star</span>
              </div>
              <div class="data experience">
                <span class="data-title">Experience</span>
                <span class="data-list">2 star</span>
                <span class="data-list">2 star</span>
                <span class="data-list">2 star</span>
                <span class="data-list">2 star</span>
                <span class="data-list">2 star</span>
                <span class="data-list">2 star</span>
                <span class="data-list">2 star</span>
              </div>
              <div class="data ratings">
                <span class="data-title"> Overall Ratings</span>
                <span class="data-list">3 star</span>
                <span class="data-list">3 star</span>
                <span class="data-list">3 star</span>
                <span class="data-list">3 star</span>
                <span class="data-list">3 star</span>
                <span class="data-list">3 star</span>
                <span class="data-list">3 star</span>
              </div>
              <div class="data review">
                <span class="data-title">Review</span>
                <span class="data-list">Good</span>
                <span class="data-list">Good</span>
                <span class="data-list">Good</span>
                <span class="data-list">Good</span>
                <span class="data-list">Good</span>
                <span class="data-list">Good</span>
                <span class="data-list">Good</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainAdminPortalHome;
