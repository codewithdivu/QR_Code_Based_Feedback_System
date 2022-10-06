import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
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
            <Link to="/admin">
              <i class="fa-solid fa-house-user"></i>
              <span class="link-name">Dahsboard</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/content">
              <i class="fa-solid fa-server"></i>
              <span class="link-name">Content</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/analysis">
              <i class="fa fa-solid fa-magnifying-glass-chart"></i>
              <span class="link-name">Analytics</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/report">
              <i class="fa-solid fa-chart-pie"></i>
              <span class="link-name">Report</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/generateQR">
              <i class=" fa fa-solid fa-qrcode"></i>
              <span class="link-name">Generate QR</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/signup">
              <i class="fa-solid fa-user"></i>
              <span class="link-name">Add User</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/changePassword">
              <i class="fa fa-solid fa-lock"></i>
              <span class="link-name">Change Password</span>
            </Link>
          </li>
          <li>
            <Link to="./police.jpg">
              <i class="fa fa-solid fa-right-from-bracket"></i>
              <span class="link-name">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
