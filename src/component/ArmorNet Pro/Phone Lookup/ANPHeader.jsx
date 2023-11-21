import React from "react";
import AnpHeader from '../../../image/Anp Phone Lookup/ANP Header.svg';
import { AnpHeaderStyle } from "./AnpHeaderStyle";
import { CiSearch } from "react-icons/ci";

export default function ANPHeader() {
  return (
    <AnpHeaderStyle>
      <div className="anp-header-container">
        <div className="anp-title">
        <div className="anp-title-img"><img className="title-img" src={AnpHeader} alt="" /></div>
          <span className="anp-title-text"> Phone Lookup</span>
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
