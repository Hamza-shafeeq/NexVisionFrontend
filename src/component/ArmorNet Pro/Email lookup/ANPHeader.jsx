import React from "react";
import anpHeader from "../../../image/ANP Email Lookup/ANP Header.svg";
import { AnpHeaderStyle } from "./AnpHeaderStyle";
import { CiSearch } from "react-icons/ci";

export default function ANPHeader() {
  return (
    <AnpHeaderStyle>
      <div className="anp-header-container">
        <div className="anp-title">
        <div className="anp-title-img"><img className="title-img" src={anpHeader} alt="" /></div>
          <span className="anp-title-text"> Email Lookup</span>
        </div>
        <div className="anp-cta">
          <div className="anp-title-btn">
            <button className="anp-btn">Add New</button>
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
