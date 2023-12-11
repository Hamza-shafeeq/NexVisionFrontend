import styled from "styled-components";

export const OnlineSocialProfilesDetailsStyled = styled.div`
  display: flex;
  background-color: white;
  .OnlineSocialProfiles-Main-Section {
    display: flex;
  }
  .OnlineSocialProfiles-Container {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
  .OnlineSocialProfiles-Section {
    display: flex;
    margin-left: 43px;
    flex-direction: column;
  }
  .OnlineSocialProfiles-Title {
    margin-top: -60px;
  }
  .OnlineSocialProfiles-Text {
    color: #999999;
    font-size: 19px;
    font-weight: 500;
  }
  .OnlineSocialProfiles-deatils {
    background-color: #faf8ff;
    display: flex;
    /* width: 100%; */
    justify-content: start;
    align-items:center;
    height :250px;
    gap:100px;
    padding-left:50px;

  }
  .OnlineSocialProfiles-input {
    height: 55px;
    width: 400px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    border: none;
    background-color: #e7e7e7;
  }
  @media all and (max-width: 570px) {
    .OnlineSocialProfiles-input {
      height: 55px;
      width: 326px;
      border-top-right-radius: 15px;
      border-top-left-radius: 15px;
      border: none;
      background-color: #e7e7e7;
    }
    .OnlineSocialProfiles-deatils {
      background-color: #faf8ff;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 250px;
      gap: 100px;
      /* padding-left: 50px; */
    }
    .OnlineSocialProfiles-Title {
      margin-top: 8px;
    }
  }
  @media all and (max-width: 380px) {
    .OnlineSocialProfiles-input {
      height: 55px;
      width: 280px;
      border-top-right-radius: 15px;
      border-top-left-radius: 15px;
      border: none;
      background-color: #e7e7e7;
    }
    .OnlineSocialProfiles-deatils {
      background-color: #faf8ff;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 250px;
      gap: 100px;
      /* padding-left: 50px; */
    }
    .OnlineSocialProfiles-Title {
      margin-top: 8px;
      font-size: 22px;
    }
  } 
`;
