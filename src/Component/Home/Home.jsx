import React from "react";
import "./Home.css";
import MainDash from "../MainDash/MainDash";
import Sidebar from "../Sidebar/Sidebar";

const Home = () => {
  return (
    <div className="home-Conatainer">
      <Sidebar />
      <MainDash />
    </div>
  );
};

export default Home;
