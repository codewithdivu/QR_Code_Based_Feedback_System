import React from "react";

const Content = () => {
  return (
    <>
      <nav>
        <div class="logo-name">
          <div class="logo-image">
            <img src="./images/Logo.png" alt="" />
          </div>

          <span class="logo_name"> Gujarat Police </span>
        </div>

        <div class="menu-items">
          <ul class="nav-links">
            <li>
              <a href="./index_main_portal.html">
                <i class="fa-solid fa-house-user"></i>
                <span class="link-name">Dahsboard</span>
              </a>
            </li>
            <li>
              <a href="./content.html">
                <i class="fa-solid fa-server"></i>
                <span class="link-name">Content</span>
              </a>
            </li>
            <li>
              <a href="./analysis.html">
                <i class="fa fa-solid fa-magnifying-glass-chart"></i>
                <span class="link-name">Analytics</span>
              </a>
            </li>
            <li>
              <a href="./report.html">
                <i class="fa-solid fa-chart-pie"></i>
                <span class="link-name">Report</span>
              </a>
            </li>
            <li>
              <a href="./generateQR.html">
                <i class=" fa fa-solid fa-qrcode"></i>
                <span class="link-name">Generate QR</span>
              </a>
            </li>
            <li>
              <a href="../admin panel/signup.html">
                <i class="fa-solid fa-user"></i>
                <span class="link-name">Add User</span>
              </a>
            </li>
            <li>
              <a href="./change_password.html">
                <i class="fa fa-solid fa-lock"></i>
                <span class="link-name">Change Password</span>
              </a>
            </li>
            <li>
              <a href="./police.jpg">
                <i class="fa fa-solid fa-right-from-bracket"></i>
                <span class="link-name">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <section class="dashboard" id="12">
        <div class="dash-title">
          <p>Feedback Management System</p>
          <hr />
        </div>
        <div class="dash-content">
          <div class="overview">
            <div class="title">
              <i class="fa-solid fa-server"></i>
              <span class="text">Content Overview</span>
            </div>

            <div class="boxes">
              <div class="box box1">
                <i class="fa fa-solid fa-jet-fighter-up"></i>
                <span class="text">Total Reviews</span>
                <span class="number">60,512</span>
              </div>
              <div class="box box2">
                <i class="fa fa-solid fa-bicycle"></i>
                <span class="text">Today's Reviews</span>
                <span class="number">20,120</span>
              </div>
              <div class="box box3">
                <i class="fa-solid fa-car"></i>
                <span class="text">Last Month Reviews </span>
                <span class="number">10,120</span>
              </div>
            </div>
          </div>

          <div class="activity">
            <div class="title">
              <i class="fa fa-solid fa-people-group"></i>
              <span class="text">Select police station</span>
            </div>
            <div class="select__police">
              <div class="select__distic">
                <form class="district">
                  <select class="district__1">
                    <option value="0" class="option__forform" selected="">
                      Select District...
                    </option>
                    <option value="1" class="option__forform">
                      DEVBHUMI DWARKA
                    </option>
                    <option value="2" class="option__forform">
                      SURAT
                    </option>
                    <option value="3" class="option__forform">
                      RAJKOT
                    </option>
                    <option value="4" class="option__forform">
                      PORBANDAR
                    </option>
                    <option value="5" class="option__forform">
                      JAMANAGAR
                    </option>
                    <option value="6" class="option__forform">
                      JUNAGADH
                    </option>
                    <option value="7" class="option__forform">
                      AMRELI
                    </option>
                  </select>
                </form>
              </div>
              <div class="select__taluko">
                <form class="district__taluko">
                  <select class="district__taluko1">
                    <option value="0" class="option__forform" selected="">
                      Select Taluka...
                    </option>
                    <option value="1" class="option__forform">
                      KALYANPUR
                    </option>
                    <option value="2" class="option__forform">
                      OKHA
                    </option>
                    <option value="3" class="option__forform">
                      KHAMBHALIYA
                    </option>
                    <option value="4" class="option__forform">
                      BHANVAD
                    </option>
                  </select>
                </form>
              </div>
              <div class="select__policestation">
                <form class="district__police">
                  <select class="district__police1">
                    <option value="0" class="option__forform" selected="">
                      Select Police Station...
                    </option>
                    <option value="1" class="option__forform">
                      KALYANPUR POLICE STATION
                    </option>
                    <option value="2" class="option__forform">
                      OKHA POLICE STATION
                    </option>
                    <option value="3" class="option__forform">
                      KHAMBHALIYA POLICE STATION
                    </option>
                    <option value="4" class="option__forform">
                      BHANVAD POLICE STATION
                    </option>
                  </select>
                </form>
              </div>
            </div>
            <div class="title">
              <i class="fa fa-solid fa-calendar"></i>
              <span class="text">Select Date </span>
            </div>
            <div class="calender">
              <div class="datefrom">
                <input class="datefrom1" type="date" />
              </div>
              <p class="fordatep">TO</p>
              <div class="dateto">
                <input class="dateto1" type="date" />
              </div>
            </div>

            <div class="download_btn btn">
              <button>Download QR</button>
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

export default Content;
