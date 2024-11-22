import React from "react";
import { InsightStyled } from "./style";
import { FaStar } from "react-icons/fa";
import Examplelogo from "../../image/star.png";
import Sidebar from "../../component/sidebar/sidebar";

function insightAi() {
  return (
    <InsightStyled>
      <Sidebar>
        <div className="InsightAi-Main-Section">
          <div className="Insight-Main-Page"></div>
          <div className="NexVision-Main-Section">
            <div className="Ai-Text-Section ">
              <span className="Ai-Title"> Nexvision AI</span>
              <span className="Ai-Text">
                In a short while, we'll unveil a groundbreaking fusion of
                Open Source Intelligence and cutting-edge AI technology.
              </span>
              <span className="Ai-Stars">
                <FaStar className="Star" /> Embark on an Enchanting Journey of
                Possibilities! <FaStar className="Star" />
              </span>
              <span className="Ai-Text">
                Deep Insights: Dive into vast data landscapes and extract
                meaningful, actionable insights effortlessly. Real-time
                Analysis: Stay ahead of the curve with AI-driven real-time
                monitoring and analysis. Enhanced Decision-making: Empower your
                decisions with data-backed intelligence like never before.
              </span>
            </div>
          </div>
          <div className="Card-Rotating">
            <div className="Examples-Card-Section">
              <div className="Examples-Cards-Container">
                <div className="Examples-Card-Logo">
                  <img
                    className="Examples-Logo"
                    src={Examplelogo}
                    alt="Example Logo"
                  />
                  <span className="Example-Title">Examples</span>
                </div>
                <div className="Examples-Text-Section">
                  <li className="Examples-Text">
                    Identifying any unauthorized access, data leaks for email
                    address.
                  </li>

                  <li className="Examples-Text">
                    Identify individual's names, aliases, and affiliations under
                    economic sanctions.
                  </li>
                  <li className="Examples-Text">
                    Help me verify the reputation of an IP address, blacklisted
                    or used in any scams.
                  </li>
                </div>
              </div>
            </div>
            <div className="Examples-Card-Section">
              <div className="Examples-Cards-Container">
                <div className="Examples-Card-Logo">
                  <img className="Examples-Logo" src={Examplelogo} alt="" />
                  <span className="Example-Title">Capabilities</span>
                </div>
                <div className="Examples-Text-Section">
                  <li className="Examples-Text">
                    Natural Language Understanding
                  </li>

                  <li className="Examples-Text">
                    Trend and Pattern Identification
                  </li>
                  <li className="Examples-Text">Entity Recognition</li>
                </div>
              </div>
            </div>
            <div className="Examples-Card-Section">
              <div className="Examples-Cards-Container">
                <div className="Examples-Card-Logo">
                  <img className="Examples-Logo" src={Examplelogo} alt="" />
                  <span className="Example-Title1">==</span>
                </div>
                <div className="Examples-Text-Section">
                  <li className="Examples-Text">
                    Providing AI-powered results within the confines of
                    sanctioned entities
                  </li>

                  <li className="Examples-Text">
                    Limited ability to generate coherently long-form text
                  </li>
                  <li className="Examples-Text">
                    Limited ability to reason and make judgments
                  </li>
                </div>
              </div>
            </div>
          </div>

          <div className="Inquiry-Box-Section">
            <div className="FormBox">
              <input
                className="NameBox"
                type="Text"
                placeholder="Kindly submit your inquiry "
              />
            </div>
            <div className="Generate-button-Main">
              {" "}
              <button className="Generate-Button">Generate more </button>
            </div>
          </div>
        </div>
      </Sidebar>
    </InsightStyled>
  );
}

export default insightAi;
