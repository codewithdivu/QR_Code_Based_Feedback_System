import React from "react";

const FirstPage = () => {
  return (
    <>
      <div className="main">
        <img className="police__img" src="./images/Logo.png" alt="" />
        <span className="police__heading">GUJARAT POLICE</span>
        <span className="police__feedback">(FEEDBACK PORTAL)</span>
        <form className="district">
          <select className="district__1">
            <option value="0" className="option__forform" selected>
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
        </form>
        <form className="district__taluko">
          <select className="district__taluko1">
            <option value="0" className="option__forform" selected>
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
        </form>
        <form className="district__police">
          <select className="district__police1">
            <option value="0" className="option__forform" selected>
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
        </form>
        <form className="police__experience">
          <textarea
            className="police__experience1"
            cols="30"
            rows="7"
            placeholder="Kindly Write Your Experience..."
          ></textarea>
        </form>
        <div className="police__btn">
          <button className="police__btn1">NEXT</button>
        </div>
      </div>
    </>
  );
};
export default FirstPage;
