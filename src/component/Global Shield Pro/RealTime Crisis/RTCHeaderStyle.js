import styled from "styled-components";

export const RtcHeaderStyle = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f4f4f4;

  .rtc-title {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .rtc-header-container {
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 75px;
    width: 100%;
    padding-left: 31px;
    padding-right: 150px;
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
    color: black;
    background-color: #edeaf4;
  }
  .rtc-search-box {
    display: flex;
    align-items: center;
    background-color: #edeaf4;

    /* border: 2px #591DDD solid; */
    padding: 4px;
    border-radius: 9px;
    cursor: pointer;
  }
  .rtc-icon {
    width: 35px;
    height: 25px;
    color: #591ddd;
  }

  .rtc-title-img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
  }
  @media all and (max-width: 1000px) {
    .rtc-header-container {
      height: 120px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0px;
      width: 100%;
      padding-left: 10px;
      padding-right: 10px;
    }

    .rtc-cta {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      gap: 6px;
    }
    .rtc-title-text {
      color: black;
      font-size: 15px;
      font-weight: 600;
    }
    .rtc-title {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 303px;
    }
    .rtc-title-img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 72px;
    }
    .rtc-cta {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      gap: 8px;
    }
    .rtc-btn {
      width: 92px;
      height: 38px;
      background-color: #591ddd;
      color: white;
      font-weight: 500;
      border: none;
      border-radius: 8px;
      font-size: 14px;
    }
    .rtc-search {
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
    .rtc-header-container {
      height: 176px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      gap: 0px;
      width: 100%;
    }
    .rtc-title-text {
      color: black;
      font-size: 15px;
      font-weight: 600;
    }
    .rtc-title-img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 85px;
    }
    .rtc-cta {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      gap: 6px;
      flex-direction: row-reverse;
    }
    .rtc-btn {
      width: 90px;
      height: 40px;
      background-color: #591ddd;
      color: white;
      font-weight: 500;
      border: none;
      border-radius: 8px;
      font-size: 14px;
    }
    .rtc-search {
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
