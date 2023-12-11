import React from "react";
import { PostsDetailsStyled } from "./style";

import { RiArrowGoBackFill } from "react-icons/ri";
import Sidebar from "../../sidebar/sidebar";

function PostsDetails() {
  return (
    <>
      <PostsDetailsStyled>
        <Sidebar>
          <div className="Email-Main-Section">
            <div className="Email-Container">
              <div className="Email-Section">
                <h1 className="Email-Title">Brand Sentinel</h1>

                <span className="Email-Text">
                  <RiArrowGoBackFill className="Back-logo" />
                  Back
                </span>
              </div>
              <div className="Email-deatils">
                <div className="Email-fields">
                  <h3>Posts</h3>
                  <input
                    type="text"
                    className="Email-input"
                    placeholder="0"
                    disabled
                    
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </Sidebar>
      </PostsDetailsStyled>
    </>
  );
}

export default PostsDetails;
