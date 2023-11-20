import React from "react";
import { HomepageStyled } from "./style";
import Navlogo from "../../image/logo.png";
import { BsBoxFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { IoKey } from "react-icons/io5";

function Homepage() {
  return (
    <HomepageStyled>
      <div className="Signup-Main-Section">
        <div className="Navbar-Container">
          <div className="Signup-Navbar">
            <nav className="navbar">
              <div className="logo">
                <img className="Nav-Logo" src={Navlogo} alt="" />
              </div>
              <div className="nav-Text-Section">
                <span className="nav-Text">
                  <BsBoxFill className="Nav-Icon" />
                  DASHBOARD
                </span>
                <span className="nav-Text">
                  <MdAccountCircle className="Nav-Icon" />
                  SIGN UP
                </span>
                <span className="nav-Text">
                  <IoKey className="Nav-Icon" />
                  SIGN IN
                </span>
              </div>
            </nav>
          </div>
        </div>
        <div className="Signup-Container">
          <div></div>
        </div>
      </div>
    </HomepageStyled>
  );
}

export default Homepage;
