import React, { PureComponent } from "react";
import "./MainDash.css";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import ProfileImage from "../../assets/img/Profile.png";

import { BiDonateHeart } from "react-icons/bi";
import { FaHeadSideVirus } from "react-icons/fa";
import { IoHeartSharp } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";

const MainDash = () => {
  const chartData = [
    {
      name: "DIABETES",
      DIABETES: "Low",
    },
    {
      name: "AUTISM",
      AUTISM: "High",
    },
    {
      name: "CARDIOVASCULAR DISEASE",
      CARDIOVASCULAR: "Medium",
    },
  ];
  const yAxisCategories = [0, "Low", "Medium", "High"];
  return (
    <div className="mainDash-Container">
      <div>
        <div className="header-container">
          <p className="header">
            <span className="bold-text">BIOLOGICAL SCORES</span>
            <br />
            <span className="small-text">7 December, 2023</span>
          </p>
        </div>

        <div className="Cards-container">
          {/* gut health card */}
          <div className="bio-score-cards gut-health">
            <div className="cards-header">
              Gut Health
              <BiDonateHeart
                style={{
                  fontSize: "25px",
                  borderRadius: "50px",
                  color: "#A7C957",
                }}
              />
            </div>
            <div className="main-content">
              <p className="number">30</p>
              <p className="out-off">/50</p>
            </div>
          </div>

          {/* Brain Health Card */}
          <div className="bio-score-cards brain-health">
            <div className="cards-header">
              Brain Health
              <FaHeadSideVirus
                style={{
                  fontSize: "23px",
                  borderRadius: "50px",
                  color: "rgba(171,196,255)",
                }}
              />
            </div>
            <div className="main-content">
              <p className="number">34</p>
              <p className="out-off">/50</p>
            </div>
          </div>

          {/* Heart health card */}
          <div className="bio-score-cards heart-health">
            <div className="cards-header ">
              Heart Health
              <IoHeartSharp
                style={{
                  fontSize: "25px",
                  borderRadius: "50px",
                  color: "rgba(246,121,132,.8)",
                }}
              />
            </div>
            <div className="main-content">
              <p className="number">22</p>
              <p className="out-off">/50</p>
            </div>
          </div>
        </div>

        <div className="header-container">
          <p className="header">
            <span className="bold-text">YOUR DISEASE RISK PREDICTION</span>
          </p>
        </div>
        {/* BarChart Section */}
        <div className="bar-chart-container">
          <ResponsiveContainer width="100%" height={240}>
            <BarChart
              width={600}
              height={400}
              data={chartData}
              margin={{ top: 30, right: 30, left: 10, bottom: 30 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f2f2f2" />
              <XAxis
                dataKey="name"
                axisLine={{ stroke: "#777" }}
                tick={{ fill: "#777", fontSize: 12 }}
              />
              <YAxis
                type="category"
                domain={yAxisCategories}
                axisLine={{ stroke: "#777" }}
                tick={{ fill: "#777", fontSize: 12 }}
              />
              <Tooltip
                wrapperStyle={{
                  background: "#fff",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  padding: "12px",
                  fontSize: 14,
                }}
                contentStyle={{ color: "#333" }}
              />
              <Legend
                verticalAlign="bottom"
                height={38}
                align="end"
                layout="horizontal"
                className="legend-container"
              />
              <Bar dataKey="DIABETES" fill="#66c2a5" radius={[8, 8, 0, 0]} />
              <Bar dataKey="AUTISM" fill="#fc8d62" radius={[8, 8, 0, 0]} />
              <Bar
                dataKey="CARDIOVASCULAR"
                fill="#8da0cb"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="user-detail-Section">
        <p className="patient-Details-header">
          Patient details <SlOptionsVertical />
        </p>

        <div className="user-container">
          <div className="img-container">
            <img
              src={ProfileImage}
              alt="Profile image"
              className="profile-image"
            />
          </div>
          <p className="name-age">
            <span className="name">Onab Ahmad</span>
            <br />
            <span className="age">Age: 21</span>
          </p>
        </div>
        <div>
          <p className="patient-Details-header">Therapeutic Interventions</p>

          <table className="therapeutic-interventions-table">
            <tbody>
              <tr>
                <td>Vitamin A:</td>
                <td>45 mcg</td>
              </tr>
              <tr>
                <td>Vitamin B3:</td>
                <td>25 mg</td>
              </tr>
              <tr>
                <td>Vitamin C:</td>
                <td>8 mg</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MainDash;
