import React from "react";
import AnpHeader from "../../../image/Anp Phone Lookup/ANP Header.svg";
import { AnpHeaderStyle } from "./AnpHeaderStyle";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export default function ANPHeader() {
  const navigate = useNavigate();
  return (
    <AnpHeaderStyle>
      <div className="anp-header-container">
        <div className="anp-title">
          <div className="anp-title-img">
            <img className="title-img" src={AnpHeader} alt="" />
          </div>
          <span className="anp-title-text"> Phone Lookup</span>
        </div>
        <div className="anp-cta">
          <div className="anp-title-btn">
            <button
              className="anp-btn"
              onClick={() => navigate("/phonelockupform")}
            >
              Add New
            </button>
          </div>

          <div className="anp-search-box">
            <CiSearch className="anp-icon" />
            <input
              className="anp-search"
              type="text"
              placeholder="Search here"
            />
          </div>
        </div>
      </div>
    </AnpHeaderStyle>
  );
}
