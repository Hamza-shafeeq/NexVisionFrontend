import React from "react";
import KYCOrganiztion from "../../../image/kyc organization title.svg";
import { KycHeaderStyle } from "./KycHeaderStyle";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export default function KYCHeader() {
  const navigate = useNavigate();
  return (
    <KycHeaderStyle>
      <div className="kyc-header-container">
        <div className="kyc-title">
          <div className="kyc-title-img">
            <img className="title-img" src={KYCOrganiztion} alt="" />
          </div>
          <span className="kyc-title-text"> Organization Intelligence</span>
        </div>
        <div className="kyc-cta">
          <div className="kyc-title-btn">
            <button
              className="kyc-btn"
              onClick={() => navigate("organizationintelligenceaddbox")}
            >
              Add New
            </button>
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
