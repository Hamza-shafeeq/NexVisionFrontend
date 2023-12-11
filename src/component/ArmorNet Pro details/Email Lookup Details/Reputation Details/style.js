import styled from "styled-components";

export const ReputationDetailsStyled = styled.div`
  display: flex;
  background-color: white;
  .Reputation-Main-Section {
    display: flex;
  }
  .Reputation-Container {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
  .Reputation-Section {
    display: flex;
    margin-left: 43px;
    flex-direction: column;
  }
  .Reputation-Title {
    margin-top: -60px;
  }
  .Reputation-Text {
    color: #999999;
    font-size: 19px;
    font-weight: 500;
  }
  .Reputation-deatils {
    background-color: #faf8ff;
    display: flex;
    /* width: 100%; */
    justify-content: start;
    align-items:center;
    height :250px;
    gap:100px;
    padding-left:50px;

  }
  .Reputation-input {
    height: 55px;
    width: 400px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    border: none;
    background-color: #e7e7e7;
  }
  @media all and (max-width: 570px) {
    .Reputation-input {
      height: 55px;
      width: 326px;
      border-top-right-radius: 15px;
      border-top-left-radius: 15px;
      border: none;
      background-color: #e7e7e7;
    }
    .Reputation-deatils {
      background-color: #faf8ff;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 250px;
      gap: 100px;
      /* padding-left: 50px; */
    }
    .Reputation-Title {
      margin-top: 8px;
    }
  }
  @media all and (max-width: 380px) {
    .Reputation-input {
      height: 55px;
      width: 280px;
      border-top-right-radius: 15px;
      border-top-left-radius: 15px;
      border: none;
      background-color: #e7e7e7;
    }
    .Reputation-deatils {
      background-color: #faf8ff;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 250px;
      gap: 100px;
      /* padding-left: 50px; */
    }
    .Reputation-Title {
      margin-top: 8px;
      font-size: 22px;
    }
  } 
`;
