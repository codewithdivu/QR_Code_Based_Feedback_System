import React, { useState } from "react";
import Table from "../../Assets/table";
import { newData } from "../../constants/districts";
import { collections } from "../../firebase/collections";
import { useFireStore } from "../../hooks";
import Navbar from "./adminPortal/navbar";

const Content = () => {
  const { data, isLoading } = useFireStore(collections.USERS);

  const [district, setDistrict] = useState("");
  const [taluka, setTaluka] = useState("");
  const [station, setStation] = useState("");

  // Handlers Methods
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!district || !taluka) {
      return alert("required...");
    }
    // onSelectStation({
    //   district: district,
    //   taluka: taluka,
    //   police: station,
    // });
    // onNext();
  };

  return (
    <>
      <section className="dashboard" id="12">
        <div className="dash-title">
          <p>Feedback Management System</p>
          <hr />
        </div>
        <div className="dash-content">
          <div className="overview">
            <div className="title">
              <i className="fa-solid fa-server"></i>
              <span className="text">Content Overview</span>
            </div>

            <div className="boxes">
              <div className="box box1">
                <i className="fa fa-solid fa-jet-fighter-up"></i>
                <span className="text">Total Reviews</span>
                <span className="number">{data?.length}</span>
              </div>
              <div className="box box2">
                <i className="fa fa-solid fa-bicycle"></i>
                <span className="text">Today's Reviews</span>
                <span className="number">20,120</span>
              </div>
              <div className="box box3">
                <i className="fa-solid fa-car"></i>
                <span className="text">Last Month Reviews </span>
                <span className="number">10,120</span>
              </div>
            </div>
          </div>
          {/* return array.filter((v) => v === value).length */}
          <div className="activity">
            <div className="title">
              <i className="fa fa-solid fa-people-group"></i>
              <span className="text">Select police station</span>
            </div>

            <div className="select__police">
              {/* <div className="select__distic">
                <form className="district">
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
                </form>
              </div>
              <div className="select__taluko">
                <form className="district__taluko">
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
                </form>
              </div>
              <div className="select__policestation">
                <form className="district__police">
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
                </form>
              </div> */}
              <form onSubmit={handleSubmit}>
                <div className="district">
                  <select
                    className="district__1"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                  >
                    <option value="">Select District</option>
                    {newData.map((dist) => (
                      <option value={dist.name} className="option__forform">
                        {dist.name}
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
                      {newData
                        ?.find((obj) => obj?.name === district)
                        ?.taluka?.map((taluko) => (
                          <option
                            value={taluko.name}
                            className="option__forform"
                          >
                            {taluko.name}
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
                    >
                      <option value="">Select Station</option>x
                      {newData
                        ?.find((obj) => obj?.name === district)
                        ?.taluka?.find((obj) => obj?.name === taluka)
                        ?.police_stations?.map((police) => (
                          <option value={police} className="option__forform">
                            {police}
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

            <div className="title">
              <i className="fa fa-solid fa-calendar"></i>
              <span className="text">Select Date </span>
            </div>
            <div className="calender">
              <div className="datefrom">
                <input className="datefrom1" type="date" />
              </div>
              <p className="fordatep">TO</p>
              <div className="dateto">
                <input className="dateto1" type="date" />
              </div>
            </div>
            <div className="download_btn btn">
              <button>Download QR</button>
            </div>

            <div className="activity-data">
              <Table dataFile={data} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
