import React from "react";

const SelectStation = () => {
  return (
    <div class="main">
      <img class="police__img" src="./images/Logo.png" alt="" />
      <span class="police__heading">GUJARAT POLICE</span>
      <span class="police__feedback">(FEEDBACK PORTAL)</span>
      <form class="district">
        <select class="district__1">
          <option value="0" class="option__forform" selected>
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
      <form class="district__taluko">
        <select class="district__taluko1">
          <option value="0" class="option__forform" selected>
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
      <form class="district__police">
        <select class="district__police1">
          <option value="0" class="option__forform" selected>
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

      <div class="police__btn">
        <button class="police__btn1">NEXT</button>
      </div>
    </div>
  );
};

export default SelectStation;
