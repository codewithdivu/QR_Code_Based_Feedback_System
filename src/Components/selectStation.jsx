import React, { useState } from "react";
import { districts, newData } from "../constants/districts";

const SelectStation = ({ onNext, onSelectStation, selectedStation }) => {
  const [district, setDistrict] = useState("");
  const [taluka, setTaluka] = useState("");

  // Handlers Methods
  const handleSubmit = (e) => {
    e.preventDefault();
    onSelectStation({
      district: district,
      taluka: taluka,
      police: "test",
    });
    if (!district || !taluka) {
      return alert("required...");
    }
    onNext();
  };

  return (
    <div className="data_container">
      <div className="data_container_wrap">
        <div className="heading_auth">
          <h2>Select Your Police Station</h2>
          <hr />
          <p>Kindly select your police station.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="district">
            <select
              className="district__1"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
            >
              {newData.map((dist) => (
                <option value={dist.name} className="option__forform">
                  {dist.name}
                </option>
              ))}
            </select>
          </div>
          <div className="district__taluko">
            <select
              className="district__taluko1"
              onChange={(e) => setTaluka(e.target.value)}
            >
              {newData
                ?.find((obj) => obj?.name === district)
                ?.taluka?.map((taluko) => (
                  <option value={taluko.name} className="option__forform">
                    {taluko.name}
                  </option>
                ))}
            </select>
          </div>
          {/* <div className="district__police">
            <select className="district__police1">
              {newData
                ?.find((obj) => obj?.name === district)
                ?.find((obj) => obj?.name === taluka)
                ?.police_stations?.map((police) => (
                  <option value={police} className="option__forform">
                    {police}
                  </option>
                ))}
            </select>
          </div> */}
          <button className="sendOtp">Next</button>
        </form>
      </div>
    </div>
  );
};

export default SelectStation;
