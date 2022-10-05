import React from "react";

const SelectStation = ({ onNext, onSelectStation, selectedStation }) => {
  // Handlers Methods
  const handleSubmit = (e) => {
    e.preventDefault();
    onSelectStation({
      district: "test",
      taluka: "test",
      police: "test",
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
            <select className="district__1">
              <option value="0" className="option__forform" selected="">
                Select District...
              </option>
              <option value="1" className="option__forform">
                DEVBHUMI DWARKA
              </option>
              <option value="2" className="option__forform">
                SURAT
              </option>
              <option value="3" className="option__forform">
                RAJKOT
              </option>
              <option value="4" className="option__forform">
                PORBANDAR
              </option>
              <option value="5" className="option__forform">
                JAMANAGAR
              </option>
              <option value="6" className="option__forform">
                JUNAGADH
              </option>
              <option value="7" className="option__forform">
                AMRELI
              </option>
            </select>
          </div>
          <div className="district__taluko">
            <select className="district__taluko1">
              <option value="0" className="option__forform" selected="">
                Select Taluka...
              </option>
              <option value="1" className="option__forform">
                KALYANPUR
              </option>
              <option value="2" className="option__forform">
                OKHA
              </option>
              <option value="3" className="option__forform">
                KHAMBHALIYA
              </option>
              <option value="4" className="option__forform">
                BHANVAD
              </option>
            </select>
          </div>
          <div className="district__police">
            <select className="district__police1">
              <option value="0" className="option__forform" selected="">
                Select Police Station...
              </option>
              <option value="1" className="option__forform">
                KALYANPUR POLICE STATION
              </option>
              <option value="2" className="option__forform">
                OKHA POLICE STATION
              </option>
              <option value="3" className="option__forform">
                KHAMBHALIYA POLICE STATION
              </option>
              <option value="4" className="option__forform">
                BHANVAD POLICE STATION
              </option>
            </select>
          </div>
          <button className="sendOtp">Next</button>
        </form>
      </div>
    </div>
  );
};

export default SelectStation;
