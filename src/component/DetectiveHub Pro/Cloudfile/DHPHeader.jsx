import React from "react";
import DhpHeader from '../../../image/cloudfile.svg';
import { DhpHeaderStyle } from "./DhpHeaderStyle";
import { CiSearch } from "react-icons/ci";

export default function DHPHeader() {
  return (
    <DhpHeaderStyle>
      <div className="dhp-header-container">
        <div className="dhp-title">
        <div className="dhp-title-img"><img className="title-img" src={DhpHeader} alt="" /></div>
          <span className="dhp-title-text"> Cloudfile</span>
        </div>
        <div className="dhp-cta">
          <div className="dhp-title-btn">
            <button className="dhp-btn">Add New</button>
          </div>

          <div className="dhp-search-box">
            <CiSearch className="dhp-icon" />
            <input
              className="dhp-search"
              type="text"
              placeholder="Search here"
            />
          </div>
        </div>
      </div>
    </DhpHeaderStyle>
  );
}
