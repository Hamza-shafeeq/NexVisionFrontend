import styled from "styled-components";

export const KycHeaderStyle = styled.div`
  display: flex;
  justify-content: center;
  background-color: #F4F4F4;

  .kyc-title {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .kyc-header-container {
    height: 120px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 75px;
    width: 100%;
  }
  .kyc-cta {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 15px;
  }

  .kyc-title-text {
    color: black;
    font-weight: 700;
    
  }

  .kyc-btn {
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
  .kyc-title-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-top: 22px; */
  }
  .kyc-search {
    width: 315px;
    height: 37px;
    font-size: 13px;
    border: none;
    outline: none;
    color: white;
    background-color: #EDEAF4;
  }
  .kyc-search-box {
    display: flex;
    align-items: center;
    background-color: #EDEAF4;

    /* border: 2px #591DDD solid; */
    padding: 4px;
    border-radius: 9px;
    cursor: pointer;
  }
  .kyc-icon {
    width: 35px;
    height: 25px;
    color: #591DDD;
  }

  .kyc-title-img{
    display:flex;
    justify-content:center;
    align-items:center;
    width:100px;
    height:100px;
  }

`;
