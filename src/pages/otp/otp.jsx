import React, { useState } from "react";
import { OtppageStyled } from "./style";
import Navlogo from "../../image/logo.png";
import { BsBoxFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { IoKey } from "react-icons/io5";
import Background from "../../image/background.png";
import { useNavigate } from "react-router-dom";

function Otp() {
  const navigate = useNavigate();
  return (
    <OtppageStyled>
      <div className="Signup-Main-Section">
        <div className="Navbar-Container">
          <div className="Signup-Navbar-1">
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
          <div className="Signup-Background-Adjustment">
            <div className="ContactFormSide">
              <div className="Welcome-Section">
                <h1 className="Contact-1">Welcome</h1>
                <span className="Welcome-Text">
                  Enter your Otp Code sent to your Email
                </span>
              </div>

              <div className="Sign-Form-Section">
                <form className="Sign-Form">
                  <div className="Form-Box-Text">
                    <span className="Form-Box-Title">Code</span>
                    <div className="FormBox">
                      <input
                        className="NameBox"
                        type="Email"
                        placeholder="Code "
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="Sign-Button-Section">
                <button
                  className="Sign-UP-Button"
                  onClick={() => navigate("/insightAi")}
                >
                  Submit
                </button>
              </div>
            </div>
            <div className="Signup-Image-Section">
              <img className="Sign-Logo" src={Background} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="Footer-Main-Section">
        <span className="Footer-CopyRight">
          ⓒ Copyright Svenska Bostader 2023
        </span>
        <span className="Footer-Text">
          Terms and condition | Privacy Policy
        </span>
      </div>
    </OtppageStyled>
  );
}

export default Otp;
