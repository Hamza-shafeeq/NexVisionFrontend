import styled from "styled-components";

export const RTCHeaderStyle = styled.div`
  display: flex;
  justify-content: center;
  background-color: #F4F4F4;

  .rtc-title {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .rtc-header-container {
    height: 120px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 75px;
    width: 100%;
  }
  .rtc-cta {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 15px;
  }

  .rtc-title-text {
    color: black;
    font-weight: 700;
    
  }

  .rtc-btn {
    /* display: */
    width: 110px;
    height: 45px;
    background-color: #591ddd;
    color: white;
    font-weight: 500;
    border: none;
    border-radius: 8px;
    font-size: 14px;
  }
  .rtc-title-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-top: 22px; */
  }
  .rtc-search {
    width: 315px;
    height: 37px;
    font-size: 13px;
    border: none;
    outline: none;
    color: white;
    background-color: #EDEAF4;
  }
  .rtc-search-box {
    display: flex;
    align-items: center;
    background-color: #EDEAF4;

    /* border: 2px #591DDD solid; */
    padding: 4px;
    border-radius: 9px;
    cursor: pointer;
  }
  .rtc-icon {
    width: 35px;
    height: 25px;
    color: #591DDD;
  }
  .rtc-title-img{
    display:flex;
    justify-content:center;
    align-items:center;
    width:100px;
    height:100px;
  }

`;