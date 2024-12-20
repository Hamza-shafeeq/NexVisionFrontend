import React from "react";
import rtcHeader from "../../../image/GSP Real Time/RTCHeader.svg";
import { RtcHeaderStyle } from "./RTCHeaderStyle";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
export default function RTCHeader() {
  const navigate = useNavigate();
  return (
    <RtcHeaderStyle>
      <div className="rtc-header-container">
        <div className="rtc-title">
          <div className="rtc-title-img">
            <img className="title-img" src={rtcHeader} alt="" />
          </div>
          <span className="rtc-title-text"> Real Time Crisis Management</span>
        </div>
        <div className="rtc-cta">
          <div className="rtc-title-btn">
            <button
              className="rtc-btn"
              onClick={() => navigate("/realtimeaddbox")}
            >
              Add New
            </button>
          </div>

          <div className="rtc-search-box">
            <CiSearch className="rtc-icon" />
            <input
              className="rtc-search"
              type="text"
              placeholder="Search here"
            />
          </div>
        </div>
      </div>
    </RtcHeaderStyle>
  );
}
