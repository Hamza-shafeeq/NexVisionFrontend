import React, { useState } from "react";
import { SidebarStyled } from "./style";
import Sidebarlogo from "../../image/logo.png";

import { PiSuitcaseSimple } from "react-icons/pi";
import { Outlet, useNavigate } from "react-router-dom";

import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";

import { LiaCoinsSolid } from "react-icons/lia";
import Avatar from "../../image/avatar.png";

function Sidebar({ children }) {
  const navigate = useNavigate();
  const [showAbout, setShowAbout] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [showKYCDropdown, setShowKYCDropdown] = useState(false);
  const [showARMORDropdown, setShowARMORDropdown] = useState(false);
  const [showHubDropdown, setShowHubDropdown] = useState(false);
  const [showGlobalDropdown, setShowGlobalDropdown] = useState(false);
  const [showSocialDropdown, setShowSocialDropdown] = useState(false);

  const handleLinkClick = (link) => {
    if (link !== "kyccomplypro") {
      setShowKYCDropdown(false);
    }
    setActiveLink(link);
    switch (link) {
      case "insightAi":
        navigate("/insightAi");
        break;
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

  const toggleKYCDropdown = () => {
    setShowKYCDropdown(!showKYCDropdown);
  };
  const toggleARMORDropdown = () => {
    setShowARMORDropdown(!showARMORDropdown);
  };
  const toggleHubDropdown = () => {
    setShowHubDropdown(!showHubDropdown);
  };

  const toggleGlobalDropdown = () => {
    setShowGlobalDropdown(!showGlobalDropdown);
  };
  const toggleSocialDropdown = () => {
    setShowSocialDropdown(!showSocialDropdown);
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
                className={`Sidebar-Links2 ${
                  activeLink === "insightAi" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("insightAi")}
              >
                <PiSuitcaseSimple className="Links-Logo" /> Insight Al
              </span>
              <div
                className={`Sidebar-Links4 ${
                  activeLink === "armor" ? "active" : ""
                }`}
                onClick={toggleARMORDropdown}
              >
                <PiSuitcaseSimple className="Links-Logo" /> ArmorNet Pro
                <RiArrowDropDownLine className="Links-Logo" />
              </div>
              {showARMORDropdown && (
                <div className="Dropdown-Content">
                  <div className="Dropdown-Content">
                    <span
                      className={`Sidebar-Links-drown ${
                        activeLink === "risk" ? "active" : ""
                      }`}
                      onClick={() => handleLinkClick("risk")}
                    >
                      Risk Shield
                    </span>
                    <span
                      className={`Sidebar-Links-drown ${
                        activeLink === "email" ? "active" : ""
                      }`}
                      onClick={() => handleLinkClick("email")}
                    >
                      Email Lockup
                    </span>
                    <span
                      className={`Sidebar-Links-drown ${
                        activeLink === "Phone" ? "active" : ""
                      }`}
                      onClick={() => handleLinkClick("Phone")}
                    >
                      Phone Lockup
                    </span>
                    <span
                      className={`Sidebar-Links-drown ${
                        activeLink === "IP" ? "active" : ""
                      }`}
                      onClick={() => handleLinkClick("IP")}
                    >
                      IP Lockup
                    </span>
                  </div>
                </div>
              )}

              <div
                className={`Sidebar-Links ${
                  activeLink === "hub" ? "active" : ""
                }`}
                onClick={toggleHubDropdown}
              >
                <PiSuitcaseSimple className="Links-Logo" /> DetectiveHub Pro
                <RiArrowDropDownLine className="Links-Logo" />
              </div>
              {showHubDropdown && (
                <div className="Dropdown-Content">
                  <div className="Dropdown-Content">
                    <span
                      className={`Sidebar-Links-drown ${
                        activeLink === "darknet" ? "active" : ""
                      }`}
                      onClick={() => handleLinkClick("darknet")}
                    >
                      Darknet
                    </span>
                    <span
                      className={`Sidebar-Links-drown ${
                        activeLink === "discovery" ? "active" : ""
                      }`}
                      onClick={() => handleLinkClick("discovery")}
                    >
                      Discovery
                    </span>
                    <span
                      className={`Sidebar-Links-drown ${
                        activeLink === "surface" ? "active" : ""
                      }`}
                      onClick={() => handleLinkClick("surface")}
                    >
                      Surface
                    </span>
                    <span
                      className={`Sidebar-Links-drown ${
                        activeLink === "cloud" ? "active" : ""
                      }`}
                      onClick={() => handleLinkClick("cloud")}
                    >
                      Cloud File
                    </span>
                  </div>
                </div>
              )}
              <div
                className={`Sidebar-Links ${
                  activeLink === "global" ? "active" : ""
                }`}
                onClick={() => toggleGlobalDropdown("global")}
              >
                <PiSuitcaseSimple className="Links-Logo" /> Global Sheild Pro
                <RiArrowDropDownLine className="Links-Logo" />
              </div>
              {showGlobalDropdown && (
                <div className="Dropdown-Content">
                  <div className="Dropdown-Content">
                    <span
                      className={`Sidebar-Links-drown ${
                        activeLink === "real" ? "active" : ""
                      }`}
                      onClick={() => handleLinkClick("real")}
                    >
                      Real-time Crisis Management
                    </span>
                    <span
                      className={`Sidebar-Links-drown ${
                        activeLink === "geopolitical" ? "active" : ""
                      }`}
                      onClick={() => handleLinkClick("geopolitical")}
                    >
                      Geopolitical Intelligence
                    </span>
                    <span
                      className={`Sidebar-Links-drown ${
                        activeLink === "election" ? "active" : ""
                      }`}
                      onClick={() => handleLinkClick("election")}
                    >
                      Election intelligence
                    </span>
                  </div>
                </div>
              )}
              <div
                className={`Sidebar-Links ${
                  activeLink === "social" ? "active" : ""
                }`}
                onClick={() => toggleSocialDropdown("social")}
              >
                <PiSuitcaseSimple className="Links-Logo" /> Social Scan Pro
                <RiArrowDropDownLine className="Links-Logo" />
              </div>

              {showSocialDropdown && (
                <div className="Dropdown-Content">
                  <div className="Dropdown-Content">
                    <span
                      className={`Sidebar-Links-drown ${
                        activeLink === "brand" ? "active" : ""
                      }`}
                      onClick={() => handleLinkClick("brand")}
                    >
                      Brand Sentinel
                    </span>
                  </div>
                </div>
              )}

              <div
                className={`Sidebar-Links ${
                  activeLink === "kyccomplypro" ? "active" : ""
                }`}
                onClick={toggleKYCDropdown}
              >
                <PiSuitcaseSimple className="Links-Logo" /> KYCComplyPro
                <RiArrowDropDownLine className="Links-Logo" />
              </div>
              {showKYCDropdown && (
                <div className="Dropdown-Content">
                  <div className="Dropdown-Content">
                    <span
                      className={`Sidebar-Links-drown ${
                        activeLink === "kyc-third-party" ? "active" : ""
                      }`}
                      onClick={() => handleLinkClick("kyc-third-party")}
                    >
                      Third Party Intelligence
                    </span>
                    <span
                      className={`Sidebar-Links-drown ${
                        activeLink === "kyc-organization" ? "active" : ""
                      }`}
                      onClick={() => handleLinkClick("kyc-organization")}
                    >
                      Organization Intelligence
                    </span>
                    <span
                      className={`Sidebar-Links-drown ${
                        activeLink === "kyc-sanction-check" ? "active" : ""
                      }`}
                      onClick={() => handleLinkClick("kyc-sanction-check")}
                    >
                      Sanction Check
                    </span>
                    <span
                      className={`Sidebar-Links-drown ${
                        activeLink === "aml" ? "active" : ""
                      }`}
                      onClick={() => handleLinkClick("Aml")}
                    >
                      AML Lookup
                    </span>
                    <span
                      className={`Sidebar-Links-drown${
                        activeLink === "transaction" ? "active" : ""
                      }`}
                      onClick={() => handleLinkClick("Transaction")}
                    >
                      Transaction Lookup
                    </span>
                    <span
                      className={`Sidebar-Links-drown ${
                        activeLink === "kyc-card-lookup" ? "active" : ""
                      }`}
                      onClick={() => handleLinkClick("kyc-card-lookup")}
                    >
                      Card BIN Lookup
                    </span>
                  </div>
                </div>
              )}

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
                  <span className="Sidebar-Links6">
                    <IoIosInformationCircleOutline className="Links-Logo" />
                    Help
                  </span>
                  <span
                    className="Sidebar-Links1"
                    onClick={() => navigate("/")}
                  >
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
