import React from "react";

const GreetingPage = () => {
  return (
    <>
      <div className="main_container">
        <div className="data_container">
          {/* <h1>Thanks for your feedback</h1> */}
          {/* <div className="police_heading">GUJARAT POLICE</div> */}
          <div className="heading_auth">
            <h2>Thank you </h2>
            <hr />
            <p>...</p>
          </div>
          <div className="thankyou_data_detail">
            <p className="thanks_data">Thanks for your feedback</p>
            <p className="minor"> For help call +91xxxxxxxxxx</p>
            <p className="minor">
              Download for citizen{" "}
              <a href="" className="bold">
                Citizen First App{" "}
              </a>{" "}
            </p>
            <p className="minor">services of Gujarat Police</p>
          </div>
          <div className="thankyou_data_detail">
            <p className="thanks_data">તમારા પ્રતિભાવ બદલ આભાર</p>
            <p className="minor">કોઈપણ કટોકટી માટે +91xxxxxxxxxx ડાયલ કરો</p>
            <p className="minor">ગુજરાત પોલીસની નાગરિક સેવાઓ </p>
            <p className="minor">
              માટેડાઉનલોડ કરો{" "}
              <a href="" className="bold">
                Citizen First App
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GreetingPage;
