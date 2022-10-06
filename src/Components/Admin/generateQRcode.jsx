import React from "react";

const GenerateQRcode = () => {
  return (
    <>
      <nav>
        <div class="logo-name">
          <div class="logo-image">
            <img src="./images/Logo.png" alt="" />
          </div>

          <span class="logo_name">Gujarat Police</span>
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

      <section class="dashboard">
        <div class="dash-title">
          <p>Feedback Management System</p>
          <hr />
        </div>
        <div class="dash-content">
          <div class="qr_image_container">
            <div class="qr_image">
              <img src="./images/police.jpg" alt="" />
            </div>
            <div class="download_btn btn">
              <button>Download QR</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GenerateQRcode;
