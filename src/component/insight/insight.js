import React from "react";
import Sidebar from "../sidebar/sidebar.js";
import { InsightStyled } from "./style.js";
import { LiaCoinsSolid } from "react-icons/lia";
import Avatar from "../../image/avatar.png";
// import KYCSanction from '../pages/KYCComply Pro/KYC Sanction check/KYCSanction.jsx';
// import KYCCardLookup from "../pages/KYCComply Pro/KYC Card Lookup/KYCCardLookup.jsx";



function Insight({children}) {
  return (
    <>
      <InsightStyled>
        <Sidebar />
        <div className="Insight-Main-Page">
          <div className="Insight-Container">
            <div className="Credit-Main-Section">
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
        
      </InsightStyled>

    </>
  );
}

export default Insight;
