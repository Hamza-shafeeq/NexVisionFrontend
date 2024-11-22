import React, { useState } from "react";
import { HomepageStyled } from "./style";
import Navlogo from "../../image/logo.png";
import { BsBoxFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { IoKey } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Background from "../../image/background.png";

function Homepage() {
  const navigate = useNavigate();
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => setIsToggled((previousState) => !previousState);
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
          <div className="Signup-Background-Adjustment">
            <div className="ContactFormSide">
              <div className="Welcome-Section">
                <h1 className="Contact">Welcome</h1>
                <span className="Welcome-Text">
                  Enter your email and password to sign UP
                </span>
              </div>

              <div className="Sign-Form-Section">
                <form className="Sign-Form">
                  <div className="Form-Box-Text">
                    <span className="Form-Box-Title">Email</span>
                    <div className="FormBox">
                      <input
                        className="NameBox"
                        type="Email"
                        placeholder="Your Email Address "
                      />
                    </div>
                  </div>
                  <div className="Form-Box-Text">
                    <span className="Form-Box-Title">Password</span>
                    <div className="FormBox">
                      <input
                        className="NameBox"
                        type="Password"
                        placeholder="Your Password"
                      />
                    </div>
                  </div>
                  <div className="Forget-Text-Section">
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={isToggled}
                        onChange={handleToggle}
                      />
                      <span className="slider round"></span>
                    </label>
                    <span className="Character-Text">Remember me</span>
                  </div>
                </form>
              </div>
              <div className="Sign-Button-Section">
                <button
                  className="Sign-UP-Button"
                  onClick={() => navigate("/otp")}
                >
                  Sign in
                </button>
              </div>
              <div className="Log-text-Section">
                <span className="log-Text">Dont have an account? </span>
                <span className="Log">Sign up</span>
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
    </HomepageStyled>
  );
}

export default Homepage;
