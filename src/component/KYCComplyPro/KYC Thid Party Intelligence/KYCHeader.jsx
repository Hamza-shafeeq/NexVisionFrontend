import React from "react";
import kycthirdTitle from "../../../image/kycthirdTitle.svg";
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
            <img className="title-img" src={kycthirdTitle} alt="" />
          </div>
          <span className="kyc-title-text"> Third Party Intelligence</span>
        </div>
        <div className="kyc-cta">
          <div className="kyc-title-btn">
            <button
              className="kyc-btn"
              onClick={() => navigate("/addthirdpartydetailsbox")}
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
