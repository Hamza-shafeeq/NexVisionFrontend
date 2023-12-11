import styled from "styled-components";

export const GeneralInfoDetailsStyled = styled.div`
  display: flex;
  background-color: white;
  .GeneralInfo-Main-Section {
    display: flex;
  }
  .GeneralInfo-Container {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
  .GeneralInfo-Section {
    display: flex;
    margin-left: 43px;
    flex-direction: column;
  }
  .GeneralInfo-Title {
    margin-top: -60px;
  }
  .GeneralInfo-Text {
    color: #999999;
    font-size: 19px;
    font-weight: 500;
  }
  .GeneralInfo-deatils {
    background-color: #faf8ff;
    display: flex;
    justify-content: start;
    align-items:center;
    padding-left:50px;
    height:450px;

  }
  .GeneralInfo-input {
   display:flex;
   flex-direction:column;
   gap:2px;
   padding-left:20px;
  }

  .GeneralInfo-input-container{
    /* height: 55px; */
    width: 400px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    border: none;
    background-color: #e7e7e7;
    display:flex;
    flex-direction:column;
    height: 300px;
    padding-top: 15px;
  }
  @media all and (max-width: 570px) {
    .GeneralInfo-input {
      height: 55px;
      width: 326px;
      border-top-right-radius: 15px;
      border-top-left-radius: 15px;
      border: none;
      background-color: #e7e7e7;
    }
    .GeneralInfo-deatils {
      background-color: #faf8ff;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 250px;
      gap: 100px;
      /* padding-left: 50px; */
    }
    .GeneralInfo-Title {
      margin-top: 8px;
    }
  }
  @media all and (max-width: 380px) {
    .GeneralInfo-input {
      height: 55px;
      width: 280px;
      border-top-right-radius: 15px;
      border-top-left-radius: 15px;
      border: none;
      background-color: #e7e7e7;
    }
    .GeneralInfo-deatils {
      background-color: #faf8ff;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 250px;
      gap: 100px;
      /* padding-left: 50px; */
    }
    .GeneralInfo-Title {
      margin-top: 8px;
      font-size: 22px;
    }
  } 

`;
