import styled from "styled-components";

export const DhpHeaderStyle = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f4f4f4;

  .dhp-title {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dhp-header-container {
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 75px;
    width: 100%;
    padding-left: 31px;
    padding-right: 150px;
  }
  .dhp-cta {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 15px;
  }

  .dhp-title-text {
    color: black;
    font-weight: 700;
  }

  .dhp-btn {
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
  .dhp-title-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-top: 22px; */
  }
  .dhp-search {
    width: 315px;
    height: 37px;
    font-size: 13px;
    border: none;
    outline: none;
    color: black;
    background-color: #edeaf4;
  }
  .dhp-search-box {
    display: flex;
    align-items: center;
    background-color: #edeaf4;

    /* border: 2px #591DDD solid; */
    padding: 4px;
    border-radius: 9px;
    cursor: pointer;
  }
  .dhp-icon {
    width: 35px;
    height: 25px;
    color: #591ddd;
  }

  .dhp-title-img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
  }
  @media all and (max-width: 1000px) {
    .dhp-header-container {
      height: 120px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0px;
      width: 100%;
      padding-left: 10px;
      padding-right: 10px;
    }

    .dhp-cta {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      gap: 6px;
    }
    .dhp-title-text {
      color: black;
      font-size: 15px;
      font-weight: 600;
    }
    .dhp-title {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 303px;
    }
    .dhp-title-img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 72px;
    }
    .dhp-cta {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      gap: 8px;
    }
    .dhp-btn {
      width: 92px;
      height: 38px;
      background-color: #591ddd;
      color: white;
      font-weight: 500;
      border: none;
      border-radius: 8px;
      font-size: 14px;
    }
    .dhp-search {
      width: 184px;
      height: 37px;
      font-size: 13px;
      border: none;
      outline: none;
      color: black;
      background-color: #edeaf4;
    }
  }
  @media all and (max-width: 750px) {
    .dhp-header-container {
      height: 176px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      gap: 0px;
      width: 100%;
    }
    .dhp-title-text {
      color: black;
      font-size: 15px;
      font-weight: 600;
    }
    .dhp-title-img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 85px;
    }
    .dhp-cta {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      gap: 6px;
      flex-direction: row-reverse;
    }
    .dhp-btn {
      width: 90px;
      height: 40px;
      background-color: #591ddd;
      color: white;
      font-weight: 500;
      border: none;
      border-radius: 8px;
      font-size: 14px;
    }
    .dhp-search {
      width: 140px;
      height: 34px;
      font-size: 13px;
      border: none;
      outline: none;
      color: black;
      background-color: #edeaf4;
    }
  }
`;
