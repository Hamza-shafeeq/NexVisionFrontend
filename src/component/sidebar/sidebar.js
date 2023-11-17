// import React, { useState } from "react";
import { SidebarStyled } from "./style";
import Sidebarlogo from "../../image/logo.png";
import { MidSidebarArray, SidebarArray } from "../../Array";
import { PiSuitcaseSimple } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";

function Sidebar() {
  const navigate = useNavigate();
  // const [selected, setSelected] = useState("");

  return (
    <>
      <SidebarStyled>
        <div className="Sidebar-Main-Logo">
          <div className="Sidebar-Logo-Section">
            <img className="Sidebar-Logo" src={Sidebarlogo} alt="" />
          </div>
        </div>
        <p className="Sidebar-Main-Title-Section">Main</p>
        <span className="Sidebar-Links">
          <PiSuitcaseSimple className="Links-Logo" /> Insight Al
        </span>
        {SidebarArray.map((item, index) => (
          <div className="Sidebar-Container" key={index}>
            <div className="Sidebar-Links-Section">
              <span className="Sidebar-Links" onClick={() => navigate("/")}>
                <PiSuitcaseSimple className="Links-Logo" /> {item.title}
                <RiArrowDropDownLine className="Links-Logo" />
              </span>
            </div>
          </div>
        ))}

        <div className="Sidebar-Main-Admin-Tools">
          <div className="Border"></div>
          <p className="Sidebar-Main-Title">ADMIN TOOLS</p>

          {MidSidebarArray.map((item, index) => (
            <div className="Sidebar-Container" key={index}>
              <div className="Sidebar-Links-Section">
                <span className="Sidebar-Links">
                  <PiSuitcaseSimple className="Links-Logo" /> {item.name}
                  <RiArrowDropDownLine className="Links-Logo" />
                </span>
              </div>
            </div>
          ))}
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
      </SidebarStyled>
    </>
  );
}

export default Sidebar;
