import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/user/feedback")}>Enter to site</button>
    </div>
  );
};

export default LandingPage;
