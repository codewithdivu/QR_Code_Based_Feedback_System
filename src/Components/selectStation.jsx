import React, { useState } from "react";
import { useEffect } from "react";
import { districts, dk, newData } from "../constants/districts";
import { useSearchParams } from "react-router-dom";

const SelectStation = ({ onNext, onSelectStation, selectedStation }) => {
  // params value

  const [searchParams] = useSearchParams();

  const [district, setDistrict] = useState(searchParams.get("district"));
  const [taluka, setTaluka] = useState(searchParams.get("taluka"));
  const [station, setStation] = useState(searchParams.get("station"));

  useEffect(() => {
    if (selectedStation) {
      const { district, police, taluka } = selectedStation;
      district && setDistrict(district);
      taluka && setTaluka(taluka);
      police && setStation(police);
    }
  }, [selectedStation]);

  // Handlers Methods
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!district || !taluka) {
      return alert("required...");
    }
    onSelectStation({
      district: district,
      taluka: taluka,
      police: station,
    });
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
              disabled={selectedStation}
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
                disabled={selectedStation}
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
          {district && taluka && (
            <div className="district__police">
              <select
                className="district__police1"
                onChange={({ target }) => setStation(target.value)}
                disabled={selectedStation}
              >
                <option value="">Select Station</option>x
                {dk
                  ?.find((obj) => obj?.value === district)
                  ?.talukas?.find((obj) => obj?.value === taluka)
                  ?.stations?.map((police) => (
                    <option value={police.value} className="option__forform">
                      {police.label}
                    </option>
                  ))}
              </select>
            </div>
          )}
          <button className="sendOtp" disabled={!station}>
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default SelectStation;
