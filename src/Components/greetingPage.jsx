import React from "react";

const GreetingPage = () => {
  return (
    <>
      <div className="thanku__box">
        <div className="police_logo_details_container">
          <div className="thanku__span">
            <span className="thanku__aa">Thank you for your </span>
            <span className="thanku__aa">feedback</span>
            <span className="thanku__num">
              Dial +91xxxxxxxxxx for any emergency
            </span>
            <a className="thanku_link" href="#">
              Download Citizen First App for citizen{" "}
              <span className="thanku_hello">services of Gujarat police</span>{" "}
            </a>
            <span className="thanku_aa thanku_tamaro">તમારા પ્રતિભાવ બદલ </span>
            <span className="thanku__aa">આભાર</span>
            <span className="thanku__num">
              કોઈપણ કટોકટી માટે +91xxxxxxxxxx ડાયલ કરો
            </span>
            <a className="thanku_link" href="#">
              ગુજરાત પોલીસની નાગરિક સેવાઓ માટે
              <span className="thanku_hello">
                ડાઉનલોડ કરો Citizen First App
              </span>{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default GreetingPage;
