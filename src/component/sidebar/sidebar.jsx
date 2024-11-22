import React, { useState, useEffect } from "react";
import { SidebarStyled } from "./style";
import Sidebarlogo from "../../image/logo.png";

import { PiSuitcaseSimple } from "react-icons/pi";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
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
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [activedropdown, setactivedropdown] = useState(null);
  const { pathname } = useLocation();
  const [isNarrowScreen, setIsNarrowScreen] = useState(window.innerWidth < 700);
  useEffect(() => {
    changeRoute();
  }, []);
  console.log(activeLink);
  const changeRoute = () => {
    try {
      if (pathname) {
        if (pathname === "/insightAi") {
          setActiveLink("insightAi");
        } else if (pathname === "/email-lookup") {
          setActiveLink("email-lookup");
          setShowARMORDropdown(!showARMORDropdown);
          setactivedropdown("armor");
        } else if (pathname === "/phone-lookup") {
          setActiveLink("phone-lookup");
          setShowARMORDropdown(!showARMORDropdown);
          setactivedropdown("armor");
        } else if (pathname === "/darknet") {
          setActiveLink("darknet");
          setShowHubDropdown(!showHubDropdown);
          setactivedropdown("hub");
        } else if (pathname === "/discovery") {
          setActiveLink("discovery");
          setShowHubDropdown(!showHubDropdown);
          setactivedropdown("hub");
        } else if (pathname === "/surface") {
          setActiveLink("surface");
          setShowHubDropdown(!showHubDropdown);
          setactivedropdown("hub");
        } else if (pathname === "/cloudfile") {
          setActiveLink("cloudfile");
          setShowHubDropdown(!showHubDropdown);
          setactivedropdown("hub");
        } else if (pathname === "/geopolitical-intelligence") {
          setActiveLink("geopolitical-intelligence");
          setShowGlobalDropdown(!showGlobalDropdown);
          setactivedropdown("global");
        } else if (pathname === "/real-time-crisis") {
          setActiveLink("real-time-crisis");
          setShowGlobalDropdown(!showGlobalDropdown);
          setactivedropdown("global");
        } else if (pathname === "/brand-sentinel") {
          setActiveLink("brand-sentinel");
          setShowSocialDropdown(!showSocialDropdown);
          setactivedropdown("social");
        } else if (pathname === "/kyc-third-party") {
          setActiveLink("kyc-third-party");
          setShowKYCDropdown(!showKYCDropdown);
          setactivedropdown("kyccomplypro");
        } else if (pathname === "/kyc-organization") {
          setActiveLink("kyc-organization");
          setShowKYCDropdown(!showKYCDropdown);
          setactivedropdown("kyccomplypro");
        } else if (pathname === "/kyc-sanction-check") {
          setActiveLink("kyc-sanction-check");
          setShowKYCDropdown(!showKYCDropdown);
          setactivedropdown("kyccomplypro");
        } else if (pathname === "/kyc-card-lookup") {
          setActiveLink("kyc-card-lookup");
          setShowKYCDropdown(!showKYCDropdown);
          setactivedropdown("kyccomplypro");
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsNarrowScreen(window.innerWidth < 700);
    };

    // console.log(isSidebarVisible, "inside method");
    // console.log(isNarrowScreen);

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [isNarrowScreen || isSidebarVisible]);

  useEffect(() => {
    if (isNarrowScreen) {
      console.log("true");
      setIsSidebarVisible(true);
      console.log(isSidebarVisible);
    } else {
      console.log("false");
      setIsSidebarVisible(false);
      console.log(isSidebarVisible);
    }
  }, [isNarrowScreen]);

  const handleLinkClick = (link) => {
    console.log(link);
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
        setactivedropdown("kyccomplypro");
        break;
      case "kyc-sanction-check":
        navigate("/kyc-sanction-check");
        setactivedropdown("kyccomplypro");
        break;
      case "kyc-third-party":
        navigate("/kyc-third-party");
        setactivedropdown("kyccomplypro");
        break;
      case "kyc-organization":
        navigate("/kyc-organization");
        setactivedropdown("kyccomplypro");
        break;
      case "real-time-crisis":
        navigate("/real-time-crisis");
        setactivedropdown("global");
        break;
      case "geopolitical-intelligence":
        navigate("/geopolitical-intelligence");
        setactivedropdown("global");
        break;

      case "email-lookup":
        navigate("/email-lookup");
        setactivedropdown("armor");
        break;

      case "phone-lookup":
        navigate("/phone-lookup");
        setactivedropdown("armor");
        break;

      case "darknet":
        navigate("/darknet");
        setactivedropdown("hub");
        break;

      case "discovery":
        navigate("/discovery");
        setactivedropdown("hub");
        break;

      case "brand-sentinel":
        navigate("/brand-sentinel");
        setactivedropdown("social");
        break;
      case "surface":
        navigate("/surface");
        setactivedropdown("hub");
        break;
      case "cloudfile":
        navigate("/cloudfile");
        setactivedropdown("hub");
        break;

      case "about":
        setShowAbout(!showAbout);
        break;
      default:
        break;
    }
  };

  const toggleKYCDropdown = (name) => {
    setShowKYCDropdown(!showKYCDropdown);
    setactivedropdown(name);
  };

  const toggleARMORDropdown = (name) => {
    setShowARMORDropdown(!showARMORDropdown);
    setactivedropdown(name);
  };
  const toggleHubDropdown = (name) => {
    setShowHubDropdown(!showHubDropdown);
    setactivedropdown(name);
  };

  const toggleGlobalDropdown = (name) => {
    console.log(name);
    setShowGlobalDropdown(!showGlobalDropdown);
    setactivedropdown(name);
  };
  const toggleSocialDropdown = (name) => {
    setShowSocialDropdown(!showSocialDropdown);
    setactivedropdown(name);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible((prevState) => !prevState);
  };

  return (
    <>
      <SidebarStyled isSidebarVisible={isSidebarVisible}>
        <div className="sidebar-container">
          <div
            className="SidebarMenu"
            style={{
              width: isSidebarVisible ? "0px" : "",
              position: isSidebarVisible ? "absoulte" : "absoulte",
            }}
          >
            <div className="Sidebar-Main-Logo">
              <div className="Sidebar-Logo-Section ">
                <img
                  className="Sidebar-Logo"
                  src={Sidebarlogo}
                  alt=""
                  style={{
                    display: isSidebarVisible ? "none" : "",
                  }}
                />
              </div>
            </div>
            <div className="Sidebar-Full-Menu">
              <p
                className="Sidebar-Main-Title-Section"
                style={{
                  display: isSidebarVisible ? "none" : "",
                }}
              >
                Main
              </p>
              <div
                className={`Sidebar-Links2 ${
                  activeLink === "insightAi" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("insightAi")}
                style={{
                  display: isSidebarVisible ? "none" : "",
                }}
              >
                <div
                  className="Sidebar-Links-Set"
                  style={{
                    display: isSidebarVisible ? "none" : "",
                  }}
                >
                  {" "}
                  <PiSuitcaseSimple className="Links-Logo" /> Insight Al
                </div>
              </div>
              <div
                className={`Sidebar-Links4 ${
                  activedropdown === "armor" ? "active" : ""
                }`}
                onClick={() => toggleARMORDropdown("armor")}
                style={{
                  display: isSidebarVisible ? "none" : "",
                }}
              >
                <div
                  className="Sidebar-Links-Set"
                  style={{
                    display: isSidebarVisible ? "none" : "",
                  }}
                >
                  <PiSuitcaseSimple className="Links-Logo" /> ArmorNet Pro
                </div>

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
                        activeLink === "email-lookup" ? "active" : ""
                      }`}
                      onClick={() => handleLinkClick("email-lookup")}
                    >
                      Email Lookup
                    </span>
                    <span
                      className={`Sidebar-Links-drown ${
                        activeLink === "phone-lookup" ? "active" : ""
                      }`}
                      onClick={() => handleLinkClick("phone-lookup")}
                    >
                      Phone Lookup
                    </span>
                    <span
                      className={`Sidebar-Links-drown ${
                        activeLink === "IP" ? "active" : ""
                      }`}
                      onClick={() => handleLinkClick("IP")}
                    >
                      IP Lookup
                    </span>
                  </div>
                </div>
              )}

              <div
                className={`Sidebar-Links ${
                  activedropdown === "hub" ? "active" : ""
                }`}
                onClick={() => toggleHubDropdown("hub")}
                style={{
                  display: isSidebarVisible ? "none" : "",
                }}
              >
                <div
                  className="Sidebar-Links-Set"
                  style={{
                    display: isSidebarVisible ? "none" : "",
                  }}
                >
                  {" "}
                  <PiSuitcaseSimple className="Links-Logo" /> DetectiveHub Pro
                </div>

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
                        activeLink === "cloudfile" ? "active" : ""
                      }`}
                      onClick={() => handleLinkClick("cloudfile")}
                    >
                      Cloud File
                    </span>
                  </div>
                </div>
              )}
              <div
                className={`Sidebar-Links ${
                  activedropdown === "global" ? "active" : ""
                }`}
                onClick={() => toggleGlobalDropdown("global")}
                style={{
                  display: isSidebarVisible ? "none" : "",
                }}
              >
                <div className="Sidebar-Links-Set">
                  {" "}
                  <PiSuitcaseSimple className="Links-Logo" /> Global Sheild Pro{" "}
                </div>

                <RiArrowDropDownLine className="Links-Logo" />
              </div>
              {showGlobalDropdown && (
                <div className="Dropdown-Content">
                  <div className="Dropdown-Content">
                    <span
                      className={`Sidebar-Links-drown ${
                        activeLink === "real-time-crisis" ? "active" : ""
                      }`}
                      onClick={() => handleLinkClick("real-time-crisis")}
                    >
                      Real-time Crisis Management
                    </span>
                    <span
                      className={`Sidebar-Links-drown ${
                        activeLink === "geopolitical-intelligence"
                          ? "active"
                          : ""
                      }`}
                      onClick={() =>
                        handleLinkClick("geopolitical-intelligence")
                      }
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
                  activedropdown === "social" ? "active" : ""
                }`}
                onClick={() => toggleSocialDropdown("social")}
                style={{
                  display: isSidebarVisible ? "none" : "",
                }}
              >
                <div className="Sidebar-Links-Set">
                  {" "}
                  <PiSuitcaseSimple className="Links-Logo" /> Social Scan Pro{" "}
                </div>

                <RiArrowDropDownLine className="Links-Logo" />
              </div>

              {showSocialDropdown && (
                <div className="Dropdown-Content">
                  <div className="Dropdown-Content">
                    <span
                      className={`Sidebar-Links-drown ${
                        activeLink === "brand-sentinel" ? "active" : ""
                      }`}
                      onClick={() => handleLinkClick("brand-sentinel")}
                    >
                      Brand Sentinel
                    </span>
                  </div>
                </div>
              )}

              <div
                className={`Sidebar-Links ${
                  activedropdown === "kyccomplypro" ? "active" : ""
                }`}
                onClick={() => toggleKYCDropdown("kyccomplypro")}
                style={{
                  display: isSidebarVisible ? "none" : "",
                }}
              >
                <div className="Sidebar-Links-Set">
                  {" "}
                  <PiSuitcaseSimple className="Links-Logo" /> KYCComplyPro
                </div>

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
                style={{
                  display: isSidebarVisible ? "none" : "",
                }}
              >
                <div className="Sidebar-Links-Set">
                  <PiSuitcaseSimple className="Links-Logo" /> E- Investigate Pro
                </div>

                <RiArrowDropDownLine className="Links-Logo" />
              </span>
              <span
                className={`Sidebar-Links ${
                  activeLink === "coin" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("coin")}
                style={{
                  display: isSidebarVisible ? "none" : "",
                }}
              >
                <div
                  className="Sidebar-Links-Set"
                  style={{
                    display: isSidebarVisible ? "none" : "",
                  }}
                >
                  {" "}
                  <PiSuitcaseSimple className="Links-Logo" /> CoinTrack Pro
                </div>

                <RiArrowDropDownLine className="Links-Logo" />
              </span>
              <span
                className={`Sidebar-Links ${
                  activeLink === "report" ? "active" : ""
                }`}
                onClick={() => handleLinkClick("report")}
                style={{
                  display: isSidebarVisible ? "none" : "",
                }}
              >
                <div className="Sidebar-Links-Set">
                  {" "}
                  <PiSuitcaseSimple className="Links-Logo" /> Report
                </div>

                <RiArrowDropDownLine className="Links-Logo" />
              </span>

              <div
                className="Sidebar-Main-Admin-Tools "
                style={{
                  display: isSidebarVisible ? "none" : "",
                }}
              >
                <div className="Border"></div>
                <p className="Sidebar-Main-Title">ADMIN TOOLS</p>

                <div className="Sidebar-Container">
                  <div className="Sidebar-Links-Section">
                    <div
                      className={`Sidebar-Links4 ${
                        activeLink === "" ? "active" : ""
                      }`}
                    >
                      <div className="Sidebar-Links-Set">
                        <PiSuitcaseSimple className="Links-Logo" /> Mangement
                      </div>

                      <RiArrowDropDownLine className="Links-Logo" />
                    </div>
                  </div>
                  <div className="Sidebar-Links-Section">
                    <div
                      className={`Sidebar-Links4 ${
                        activeLink === "" ? "active" : ""
                      }`}
                    >
                      <div className="Sidebar-Links-Set">
                        <PiSuitcaseSimple className="Links-Logo" /> User
                      </div>

                      <RiArrowDropDownLine className="Links-Logo" />
                    </div>
                  </div>
                  <div className="Sidebar-Links-Section">
                    <div
                      className={`Sidebar-Links4 ${
                        activeLink === "" ? "active" : ""
                      }`}
                    >
                      <div className="Sidebar-Links-Set">
                        <PiSuitcaseSimple className="Links-Logo" /> Activity
                      </div>

                      <RiArrowDropDownLine className="Links-Logo" />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="Sidebar-Container"
                style={{
                  display: isSidebarVisible ? "none" : "",
                }}
              >
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
              <div
                className="ArrowIcon-Hamberg"
                style={{
                  marginLeft: isSidebarVisible ? "-198px" : "",
                  marginTop: isSidebarVisible ? "16px" : "",
                }}
              >
                <IoIosArrowBack
                  className={`ArrowIcon ${
                    isSidebarVisible ? "arrow-closed" : "arrow-open"
                  }`}
                  onClick={toggleSidebar}
                />
              </div>
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
