import React from "react";
import Navbar from "./adminPortal/navbar";

const GenerateQRcode = () => {
  return (
    <>
      <section class="dashboard">
        <div class="dash-title">
          <p>Feedback Management System</p>
          <hr />
        </div>
        <div class="dash-content">
          <div class="qr_image_container">
            <div class="qr_image">
              <img src="/images/police.jpg" alt="" />
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
