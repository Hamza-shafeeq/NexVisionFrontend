import React from "react";
import Sidebar from "../sidebar/sidebar";
import { InsightStyled } from "./style";
import { LiaCoinsSolid } from "react-icons/lia";
import Avatar from "../../image/avatar.png";

function insight() {
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
          </div>
        </div>
      </InsightStyled>
    </>
  );
}

export default insight;
