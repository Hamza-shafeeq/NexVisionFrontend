import React from "react";
import gspHeader from "../../../image/GSP Header.svg";
import { GpiHeaderStyle } from "./GPIHeaderStyle";
import { CiSearch } from "react-icons/ci";

export default function GeopoliticalHeader() {
  return (
    <GpiHeaderStyle>
      <div className="gpi-header-container">
        <div className="gpi-title">
          <div className="gpi-title-img">
            <img className="title-img" src={gspHeader} alt="" />
          </div>
          <span className="gpi-title-text"> Geopolitical Intelligence</span>
        </div>
        <div className="gpi-cta">
          <div className="gpi-title-btn">
            <button className="gpi-btn">Add New</button>
          </div>

          <div className="gpi-search-box">
            <CiSearch className="gpi-icon" />
            <input
              className="gpi-search"
              type="text"
              placeholder="Search here"
            />
          </div>
        </div>
      </div>
    </GpiHeaderStyle>
  );
}
