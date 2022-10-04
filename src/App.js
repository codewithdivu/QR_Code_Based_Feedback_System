import React from "react";
import { Routes, Route } from "react-router-dom";
import LogIn from "./Components/logIn";
import SelectStation from "./Components/selectStation";

const App = () => {
  return (
    <>
      <Routes>
        <Route index path="/login" element={<LogIn />} />
        <Route path="/station" element={<SelectStation />} />
      </Routes>
    </>
  );
};

export default App;
