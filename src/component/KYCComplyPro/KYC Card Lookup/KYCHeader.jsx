import React from "react";
import KYCCardTitle from "../../../image/kyc CardTitle.svg";
import { KycHeaderStyle } from "./KycHeaderStyle";
import { CiSearch } from "react-icons/ci";

export default function KYCHeader() {
  return (
    <KycHeaderStyle>
      <div className="kyc-header-container">
        <div className="kyc-title">
          <div className="kyc-title-img"><img className="title-img" src={KYCCardTitle} alt="" /></div>
          <span className="kyc-title-text"> Card Lookup</span>
        </div>
        <div className="kyc-cta">
          <div className="kyc-title-btn">
            <button className="kyc-btn">Add New</button>
          </div>

          <div className="kyc-search-box">
            <CiSearch className="kyc-icon" />
            <input
              className="kyc-search"
              type="text"
              placeholder="Search here"
            />
          </div>
        </div>
      </div>
    </KycHeaderStyle>
  );
}
