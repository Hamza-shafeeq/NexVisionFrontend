import styled from "styled-components";

export const DomainDetailsStyled = styled.div`
  display: flex;
  background-color: white;
  .Domain-Main-Section {
    display: flex;
  }
  .Domain-Container {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
  .Domain-Section {
    display: flex;
    margin-left: 43px;
    flex-direction: column;
  }
  .Domain-Title {
    margin-top: -60px;
  }
  .Domain-Text {
    color: #999999;
    font-size: 19px;
    font-weight: 500;
  }
  .Domain-deatils {
    background-color: #faf8ff;
    display: flex;
    /* width: 100%; */
    justify-content: start;
    align-items:center;
    height :250px;
    gap:100px;
    padding-left:50px;

  }
  .Domain-input {
    height: 55px;
    width: 400px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    border: none;
    background-color: #e7e7e7;
  }
  @media all and (max-width: 570px) {
    .Domain-input {
      height: 55px;
      width: 326px;
      border-top-right-radius: 15px;
      border-top-left-radius: 15px;
      border: none;
      background-color: #e7e7e7;
    }
    .Domain-deatils {
      background-color: #faf8ff;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 250px;
      gap: 100px;
      /* padding-left: 50px; */
    }
    .Domain-Title {
      margin-top: 8px;
    }
  }
  @media all and (max-width: 380px) {
    .Domain-input {
      height: 55px;
      width: 280px;
      border-top-right-radius: 15px;
      border-top-left-radius: 15px;
      border: none;
      background-color: #e7e7e7;
    }
    .Domain-deatils {
      background-color: #faf8ff;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 250px;
      gap: 100px;
      /* padding-left: 50px; */
    }
    .Domain-Title {
      margin-top: 8px;
      font-size: 22px;
    }
  } 
`;
