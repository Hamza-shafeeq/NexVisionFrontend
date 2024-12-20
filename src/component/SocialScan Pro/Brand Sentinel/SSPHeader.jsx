import React from "react";
import SspHeader from "../../../image/SSpHeder.svg";
import { SspHeaderStyle } from "./SspHeaderStyle";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export default function SSPHeader() {
  const navigate = useNavigate();
  return (
    <SspHeaderStyle>
      <div className="ssp-header-container">
        <div className="ssp-title">
          <div className="ssp-title-img">
            <img className="title-img" src={SspHeader} alt="" />
          </div>
          <span className="ssp-title-text"> Brand Sentinel</span>
        </div>
        <div className="ssp-cta">
          <div className="ssp-title-btn">
            <button className="ssp-btn" onClick={() => navigate("/brandform")}>
              Add New
            </button>
          </div>

          <div className="ssp-search-box">
            <CiSearch className="ssp-icon" />
            <input
              className="ssp-search"
              type="text"
              placeholder="Search here"
            />
          </div>
        </div>
      </div>
    </SspHeaderStyle>
  );
}
