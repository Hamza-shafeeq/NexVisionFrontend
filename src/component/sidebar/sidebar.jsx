import React, { useState } from "react";
import { SidebarStyled } from "./style";
import Sidebarlogo from "../../image/logo.png";

import { PiSuitcaseSimple } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";

import { LiaCoinsSolid } from "react-icons/lia";
import Avatar from "../../image/avatar.png";

function Sidebar({ children }) {
  const navigate = useNavigate();
  const [showAbout, setShowAbout] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    switch (link) {
      case "kyc-card-lookup":
        navigate("/kyc-card-lookup");
        break;
      case "kyc-sanction-check":
        navigate("/kyc-sanction-check");
        break;
      case "kyc-third-party":
        navigate("/kyc-third-party");
        break;
      case "kyc-organization":
        navigate("/kyc-organization");
        break;

      case "about":
        setShowAbout(!showAbout);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <SidebarStyled>
        <div className="sidebar-container">
          <div className="SidebarMenu">
            <div className="Sidebar-Main-Logo">
              <div className="Sidebar-Logo-Section">
                <img className="Sidebar-Logo" src={Sidebarlogo} alt="" />
              </div>
            </div>
            <div className="Sidebar-Full-Menu">
              <p className="Sidebar-Main-Title-Section">Main</p>
              <span
                className={`Sidebar-Links ${
                  activeLink === "insight" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("insight")}
              >
                <PiSuitcaseSimple className="Links-Logo" /> Insight Al
              </span>
              <span
                className={`Sidebar-Links ${
                  activeLink === "management" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("management")}
              >
                <PiSuitcaseSimple className="Links-Logo" /> ArmorNet Pro
                <RiArrowDropDownLine className="Links-Logo" />
              </span>
              <span
                className={`Sidebar-Links ${
                  activeLink === "kyc-card-lookup" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("kyc-card-lookup")}
              >
                <PiSuitcaseSimple className="Links-Logo" /> KYC Card Lookup
              </span>
              <span
                className={`Sidebar-Links ${
                  activeLink === "kyc-sanction-check" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("kyc-sanction-check")}
              >
                <PiSuitcaseSimple className="Links-Logo" /> KYC Sanction Check
              </span>
              <span
                className={`Sidebar-Links ${
                  activeLink === "kyc-third-party" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("kyc-third-party")}
              >
                <PiSuitcaseSimple className="Links-Logo" /> KYC Third Party
              </span>
              <span
                className={`Sidebar-Links ${
                  activeLink === "kyc-organization" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("kyc-organization")}
              >
                <PiSuitcaseSimple className="Links-Logo" /> KYC Organization
              </span>
              <span
                className={`Sidebar-Links ${
                  activeLink === "investigate" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("investigate")}
              >
                <PiSuitcaseSimple className="Links-Logo" /> E- Investigate Pro
                <RiArrowDropDownLine className="Links-Logo" />
              </span>
              <span
                className={`Sidebar-Links ${
                  activeLink === "coin" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("coin")}
              >
                <PiSuitcaseSimple className="Links-Logo" /> CoinTrack Pro
                <RiArrowDropDownLine className="Links-Logo" />
              </span>
              <span
                className={`Sidebar-Links ${
                  activeLink === "report" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("report")}
              >
                <PiSuitcaseSimple className="Links-Logo" /> Report
                <RiArrowDropDownLine className="Links-Logo" />
              </span>

              <div className="Sidebar-Main-Admin-Tools">
                <div className="Border"></div>
                <p className="Sidebar-Main-Title">ADMIN TOOLS</p>

                <div className="Sidebar-Container">
                  <div className="Sidebar-Links-Section">
                    <span
                      className={`Sidebar-Links ${
                        activeLink === "" ? "active" : ""
                      }`}
                    >
                      <PiSuitcaseSimple className="Links-Logo" /> Management
                      <RiArrowDropDownLine className="Links-Logo" />
                    </span>
                    <span
                      className={`Sidebar-Links ${
                        activeLink === "user" ? "active" : ""
                      }`}
                      onClick={() => handleLinkClick("user")}
                    >
                      <PiSuitcaseSimple className="Links-Logo" /> User
                      <RiArrowDropDownLine className="Links-Logo" />
                    </span>
                    <span
                      className={`Sidebar-Links ${
                        activeLink === "activity" ? "active" : ""
                      }`}
                      onClick={() => handleLinkClick("activity")}
                    >
                      <PiSuitcaseSimple className="Links-Logo" /> Activity
                      <RiArrowDropDownLine className="Links-Logo" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="Sidebar-Container">
                <div className="Sidebar-Links-Section">
                  <span className="Sidebar-Links">
                    <IoIosInformationCircleOutline className="Links-Logo" />
                    Help
                  </span>
                  <span className="Sidebar-Links1">
                    <MdOutlineLogout className="Links-Logo" />
                    Logout Account
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="Credit-Main-Section">
            <div className="sidebar-header">
              <div className="Credit-Section">
                <span className="Credit">
                  <LiaCoinsSolid className="Coin-icon" /> 50 Credited
                </span>
              </div>

              <div className="Avatar-Main-Section">
                <img className="Manager-Avatar" src={Avatar} alt="" />
                <div className="Avatar-Text-Section">
                  <span className="Avatar-Title">PRODUCT MANAGER</span>
                  <span className="Avatar-Text">Andrew Smith</span>
                </div>
              </div>
            </div>
            {children}
          </div>
        </div>
      </SidebarStyled>
    </>
  );
}

export default Sidebar;
