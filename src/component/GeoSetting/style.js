import styled from "styled-components";

export const GeneralDataAddStyle = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  width: 100%;
  .GeneralDataAdd-Main-Section {
    display: flex;
    width: 100%;

    flex-direction: column;
  }
  .GeneralAddBox-Header {
    width: 100%;
    margin-top: 10px;
    display: flex;
    height: 58px;
    justify-content: center;
    align-items: center;
    gap: 14px;
    flex-wrap: wrap;
  }

  .GeneralAdd-Title-Section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  .GeneralAdd-TextSection {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .GeneralAdd-Number {
    width: 28px;
    font-size: 10px;
    height: 25px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #e7e7e7;
  }
  .GeneralAdd-Number1 {
    width: 28px;
    font-size: 10px;
    height: 25px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #633bbc;
    color: white;
  }

  .GeneralAdd-Title {
    display: flex;
    font-size: 17px;
    font-weight: 600;
    color: black;
  }
  .General-Add-Header {
    display: flex;
    flex-direction: column;
  }
  .GeneralAdd-Title1 {
    display: flex;
    font-size: 17px;
    font-weight: 600;
    color: #633bbc;
  }
  .General-title {
    font-size: 18px;
    font-weight: 600;
    border-bottom: 3px solid #7c7b7f;
    width: 75px;
    padding-bottom: 5px;
  }
  .NameBox {
    width: 350px;
    height: 37px;
    font-size: 17px;
    border: none;
    outline: none;
    background-color: #efeef2;
  }
  .FormBox {
    border: 2px #e6ebf2 solid;
    width: 380px;
    padding: 4px;
    background-color: #efeef2;
    border-radius: 9px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .FormIcon {
    width: 25px;
    height: 17px;
    color: #8b97a8;
  }
  .Form-Text {
    display: flex;
    flex-direction: column;
  }
  .Buttons-Section {
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: space-between;
  }
  .Forms-Setting {
    display: flex;
    align-items: flex-start;
    width: 66%;
    gap: 10px;
  }
  .Form-Titles-Setting {
    flex-direction: column;
    display: flex;
    gap: 5px;
  }
  .Form-Titles {
    font-size: 18px;
    font-weight: 400;
  }
  .Form-Gapping {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    gap: 24px;
  }
  .GeneralAdd-Header-Gapping {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64%;
    margin-bottom: 40px;
  }
  .GeneralDataAdd-Container {
    display: flex;
    width: 100%;
    height: 700px;
    background-color: #faf8ff;
    flex-direction: column;
  }
  .Buttons-Section {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
  }
  .CloseButton {
    width: 113px;
    height: 44px;
    border-radius: 9px;
    background-color: #faf8ff;
    color: black;
    font-size: 18px;
    font-weight: 500;
    border: 3px solid #8154e5;
  }
  .General-Buttons-Section {
    width: 50%;
  }
  .NextButton {
    width: 113px;
    height: 44px;
    border-radius: 9px;
    background-color: #8154e5;
    color: white;
    font-size: 18px;
    font-weight: 500;
    border: 1px solid #8154e5;
  }
  .General-Buttons-Section1 {
    gap: 10px;
    display: flex;
  }
  .Last-Check-Box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    width: 50%;
  }
  .Last-Check-Box-Container {
    display: flex;
    flex-direction: column;
  }
  .Check-Text {
    font-size: 18px;
    font-weight: 700;
  }
  .File-Title1 {
    font-size: 18px;
  }
  @media all and (max-width: 1190px) {
    .Border {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 95%;
      border-bottom: 3px solid #7c7b7f;
      margin-top: 50px;
    }
    .NameBox {
      width: 260px;
      height: 37px;
      font-size: 17px;
      border: none;
      outline: none;
      background-color: #efeef2;
    }
    .FormBox {
      border: 2px #e6ebf2 solid;
      width: 270px;
      padding: 4px;
      background-color: #efeef2;
      border-radius: 9px;
      cursor: pointer;
      display: flex;
      align-items: center;
    }
  }
  @media all and (max-width: 837px) {
    .NameBox {
      width: 220px;
      height: 37px;
      font-size: 17px;
      border: none;
      outline: none;
      background-color: #efeef2;
    }
    .FormBox {
      border: 2px #e6ebf2 solid;
      width: 240px;
      padding: 4px;
      background-color: #efeef2;
      border-radius: 9px;
      cursor: pointer;
      display: flex;
      align-items: center;
    }
    .Border {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 95%;
      border-bottom: 3px solid #7c7b7f;
      margin-top: 90px;
    }
  }
  @media all and (max-width: 782px) {
    .NameBox {
      width: 200px;
      height: 37px;
      font-size: 17px;
      border: none;
      outline: none;
      background-color: #efeef2;
    }
    .FormBox {
      border: 2px #e6ebf2 solid;
      width: 210px;
      padding: 4px;
      background-color: #efeef2;
      border-radius: 9px;
      cursor: pointer;
      display: flex;
      align-items: center;
    }
    .Border {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 95%;
      border-bottom: 3px solid #7c7b7f;
      margin-top: 90px;
    }
  }
  @media all and (max-width: 600px) {
    .NameBox {
      width: 260px;
      height: 37px;
      font-size: 17px;
      border: none;
      outline: none;
      background-color: #efeef2;
    }
    .FormBox {
      border: 2px #e6ebf2 solid;
      width: 270px;
      padding: 4px;
      background-color: #efeef2;
      border-radius: 9px;
      cursor: pointer;
      display: flex;
      align-items: center;
    }
    .Forms-Setting {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90%;
      flex-direction: column;
      gap: 10px;
    }
    .Buttons-Section {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      margin-top: 50px;
      flex-direction: column;
      flex-wrap: wrap;
    }
    .General-Buttons-Section {
      width: 113px;
      display: flex;
      justify-content: center;
      width: 100%;
      align-items: center;
    }
    .General-Buttons-Section1 {
      flex-direction: column;
      gap: 10px;
      margin-top: 10px;
      display: flex;
    }
    .NextButton {
      width: 284px;
      height: 44px;
      border-radius: 9px;
      background-color: #8154e5;
      color: white;
      font-size: 18px;
      font-weight: 500;
      border: 1px solid #8154e5;
    }
    .CloseButton {
      width: 280px;
      height: 44px;
      border-radius: 9px;
      background-color: #faf8ff;
      color: black;
      font-size: 18px;
      font-weight: 500;
      border: 3px solid #8154e5;
    }
    .General-Buttons-Section1 {
      flex-direction: column;
      gap: 10px;
      margin-top: 10px;
      display: flex;
    }
    .GeneralAdd-Header-Gapping {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-bottom: 40px;
      margin-top: 70px;
    }
    .Border {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 95%;
      border-bottom: 3px solid #7c7b7f;
      margin-top: 38px;
    }
  }
  @media all and (max-width: 560px) {
    .NameBox {
      width: 260px;
      height: 37px;
      font-size: 17px;
      border: none;
      outline: none;
      background-color: #efeef2;
    }
    .Buttons-Section {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      margin-top: 50px;
      flex-direction: column;
    }
    .General-Buttons-Section {
      width: 113px;
      display: flex;
      justify-content: center;
      width: 100%;
      align-items: center;
    }
    .FormBox {
      border: 2px #e6ebf2 solid;
      width: 270px;
      padding: 4px;
      background-color: #efeef2;
      border-radius: 9px;
      cursor: pointer;
      display: flex;
      align-items: center;
    }
    .Forms-Setting {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90%;
      flex-direction: column;
      gap: 10px;
    }
    .Buttons-Section {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      margin-top: 50px;
      flex-direction: column;
      flex-wrap: wrap;
    }

    .General-Buttons-Section1 {
      flex-direction: column;
      gap: 10px;
      margin-top: 10px;
      display: flex;
    }
    .NextButton {
      width: 284px;
      height: 44px;
      border-radius: 9px;
      background-color: #8154e5;
      color: white;
      font-size: 18px;
      font-weight: 500;
      border: 1px solid #8154e5;
    }
    .CloseButton {
      width: 280px;
      height: 44px;
      border-radius: 9px;
      background-color: #faf8ff;
      color: black;
      font-size: 18px;
      font-weight: 500;
      border: 3px solid #8154e5;
    }
    .GeneralAdd-Header-Gapping {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-bottom: 40px;
      margin-top: 70px;
    }
    .Border {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 95%;
      border-bottom: 3px solid #7c7b7f;
      margin-top: 100px;
    }
    .GeneralDataAdd-Container {
      display: flex;
      width: 98%;

      background-color: #faf8ff;
      flex-direction: column;
    }
    .General-Add-Header {
      display: flex;
      flex-direction: column;
      width: 186px;
    }
    .Last-Check-Box {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 30px;
      width: 100%;
    }
  }
  @media all and (max-width: 343px) {
    .NameBox {
      width: 260px;
      height: 37px;
      font-size: 17px;
      border: none;
      outline: none;
      background-color: #efeef2;
    }
    .FormBox {
      border: 2px #e6ebf2 solid;
      width: 270px;
      padding: 4px;
      background-color: #efeef2;
      border-radius: 9px;
      cursor: pointer;
      display: flex;
      align-items: center;
    }
    .Forms-Setting {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90%;
      flex-direction: column;
      gap: 10px;
    }
    .Buttons-Section {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      margin-top: 50px;
      flex-direction: column;
    }
    .General-Buttons-Section {
      width: 113px;
      display: flex;
      justify-content: center;
      width: 100%;
      align-items: center;
    }
    .General-Buttons-Section1 {
      flex-direction: column;
      gap: 10px;
      margin-top: 10px;
      display: flex;
    }
    .GeneralAdd-Header-Gapping {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-bottom: 40px;
      margin-top: 70px;
    }
    .Border {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 95%;
      border-bottom: 3px solid #7c7b7f;
      margin-top: 150px;
    }
    .GeneralDataAdd-Container {
      display: flex;
      width: 98%;

      background-color: #faf8ff;
      flex-direction: column;
    }
    .General-Add-Header {
      display: flex;
      flex-direction: column;
      width: 285px;
    }
    .NextButton {
      width: 284px;
      height: 44px;
      border-radius: 9px;
      background-color: #8154e5;
      color: white;
      font-size: 18px;
      font-weight: 500;
      border: 1px solid #8154e5;
    }
    .CloseButton {
      width: 280px;
      height: 44px;
      border-radius: 9px;
      background-color: #faf8ff;
      color: black;
      font-size: 18px;
      font-weight: 500;
      border: 3px solid #8154e5;
    }
  }
`;
