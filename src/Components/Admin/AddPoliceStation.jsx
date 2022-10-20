import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { dk } from "../../constants/districts";
import { addRequest, requestPoliceStation } from "../../firebase/services";

const AddPoliceStation = () => {
  const [district, setDistrict] = useState("");
  const [taluka, setTaluka] = useState("");
  const [station, setStation] = useState("");

  const navigate = useNavigate();

  const handleStationValuee = (e) => {
    // console.log("newSattion", e.target.value);
    setStation(e.target.value);
  };

  const handleRequest = async () => {
    // console.log("hello");
    const requested = await addRequest({ district, taluka, station });
    navigate("/admin");
    // console.log("bhai request is done....");
  };

  // console.log("district :>> ", district);
  // console.log("taluka", taluka);

  return (
    <>
      <section class="dashboard">
        <div class="dash-title">
          <p>Feedback Management System</p>
          <hr />
        </div>
        <div class="dash-content">
          <div className="overview">
            <div className="title">
              <i class=" fa fa-solid fa-user"></i>
              <span className="text">Add Police Station</span>
            </div>
          </div>

          <div className="work">
          <div className="">
            <select
              className="district__1"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
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
              >
                <option value="">Select Taluka</option>
                {dk
                  ?.find((obj) => obj?.value === district)
                  ?.talukas?.map((taluko) => (
                    <option value={taluko.value} className="option__forform">
                      {taluko.label}
                    </option>
                  ))}
              </select>
            </div>
          )}
           <div className="talukaa">
          {taluka && (
            <input type="text" className = "addPoliceStationn" placeholder="Enter Police Station" onChange={(e) => handleStationValuee(e)} />
          )}
        </div>
        <div>
          <button className = "work_btn" onClick={handleRequest}>Request for Station</button>
        </div>
        </div>
        </div>
       
      </section>
    </>
  );
};

export default AddPoliceStation;
