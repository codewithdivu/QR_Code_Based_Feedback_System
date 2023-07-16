import React from "react";

const GreetingPage = () => {
  return (
    <div className="data_container">
      <div className="data_container_wrap">
        <div className="heading_auth">
          <h2>Thank you !!</h2>
          <hr className="hr" />
          <p></p>
        </div>
        <div className="thankyou_data">
          <div className="thanks">
            <h2>Thanks for your feedback</h2>
          </div>
          <div className="number_feedback">
            <span> Dial 100 for further help. </span>
            <div className="citizen_app">
              <a href="https://play.google.com/store/apps/details?id=com.tcs.digigov.mobility.dhs.citizen.gj&hl=en_IN&gl=US">
                <p>Download Citizen</p>
                <p>First App for Citizen</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreetingPage;
