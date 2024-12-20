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
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 14px;
  }
  .Border {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
    border-bottom: 3px solid #7c7b7f;
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
    width: 140px;
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
  .File-Main-Section {
    display: flex;
    width: 294px;
    height: 241px;
    margin-left: 34px;
    border: 4px dotted #d9d9d9;
  }
  .File-Container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
  .File-Title {
    font-size: 18px;
    font-weight: 700;
  }
  .File-Title1 {
    font-size: 17px;
    color: #7e7e80;
  }
  .File-Title2 {
    font-size: 17px;
    color: #7e7e80;
    border-bottom: 1px solid #7e7e80;
  }
  .Forms-Setting {
    display: flex;
    justify-content: flex-start;
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
    width: 100%;
    margin-bottom: 40px;
  }
  .GeneralDataAdd-Container {
    display: flex;
    width: 100%;
    height: 100%;
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
  .Icon-Header-Section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    flex-direction: column;
  }

  .Icon-Header-Container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 65%;
    margin-top: 19px;
    background-color: #efeef2;
    height: 40px;
    padding: 8px;
    border-radius: 10px;
  }
  .Icon-Text1 {
    font-size: 18px;
    display: flex;

    font-weight: 400;
    align-items: center;
  }
  .Icon-Main-Section2 {
    display: flex;
    align-items: center;
  }
  .Filter-Icon1 {
    color: #633bbc;
  }
  .Icon-bottom-Section {
    display: flex;
    width: 65%;
    margin-top: 19px;
    background-color: white;
    color: #b0b0b0;
    height: 40px;
    padding: 8px;
    border-radius: 10px;
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
    .File-MainSection {
      display: flex;
      justify-content: center;
      width: 100%;
      align-items: center;
    }
    .GeneralAdd-Header-Gapping {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 95%;
      margin-bottom: 40px;
    }
  }
  @media all and (max-width: 837px) {
    .Border {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 95%;
      border-bottom: 3px solid #7c7b7f;
      margin-top: 90px;
    }
    .GeneralAdd-Header-Gapping {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      flex-direction: column;
      margin-bottom: 40px;
    }
    .Icon-Header-Section {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      flex-direction: column;
    }
  }
  @media all and (max-width: 782px) {
    .File-MainSection {
      display: flex;
      justify-content: center;
      width: 92%;
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
    .GeneralAdd-Header-Gapping {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      flex-direction: column;
      margin-bottom: 40px;
    }
    .Icon-Header-Section {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      flex-direction: column;
    }
  }
  @media all and (max-width: 600px) {
    .Forms-Setting {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90%;
      flex-direction: column;
      gap: 10px;
    }
    .File-Container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
      height: 150px;
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
      width: 120px;
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
      flex-direction: column;
      margin-bottom: 40px;
    }
    .Border {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 95%;
      border-bottom: 3px solid #7c7b7f;
      margin-top: 38px;
    }
    .Icon-Header-Section {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      flex-direction: column;
    }
  }
  @media all and (max-width: 560px) {
    .Forms-Setting {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90%;
      flex-direction: column;
      gap: 10px;
    }
    .Icon-Header-Container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 84%;
      margin-top: 19px;
      background-color: #efeef2;
      height: 40px;
      padding: 8px;
      border-radius: 10px;
    }
    .Icon-bottom-Section {
      display: flex;
      width: 84%;
      margin-top: 19px;
      background-color: white;
      color: #b0b0b0;
      height: 40px;
      padding: 8px;
      border-radius: 10px;
    }
    .File-Container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
      height: 150px;
    }
    .General-Add-Header {
      display: flex;
      flex-direction: column;
      width: 259px;
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
      flex-direction: column;
      margin-bottom: 40px;
    }
    .GeneralAddBox-Header {
      width: 100%;
      margin-top: 10px;
      display: flex;
      height: 58px;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 14px;
    }
    .Border {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 95%;
      margin-top: 150px;
      border-bottom: 3px solid #7c7b7f;
    }

    .Icon-Header-Section {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      flex-direction: column;
    }
    .General-Add-Header {
      display: flex;
      flex-direction: column;
      width: 168px;
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
      display: flex;
      justify-content: center;
      width: 100%;
      align-items: center;
    }

    .NextButton {
      width: 300px;
      height: 44px;
      border-radius: 9px;
      background-color: #8154e5;
      color: white;
      font-size: 18px;
      font-weight: 500;
      border: 1px solid #8154e5;
    }
    .CloseButton {
      width: 300px;
      height: 44px;
      border-radius: 9px;
      background-color: #faf8ff;
      color: black;
      font-size: 18px;
      font-weight: 500;
      border: 3px solid #8154e5;
    }
  }
  @media all and (max-width: 343px) {
    .Forms-Setting {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90%;
      flex-direction: column;
      gap: 10px;
    }
    .Icon-Header-Container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 84%;
      margin-top: 19px;
      background-color: #efeef2;
      height: 40px;
      padding: 8px;
      border-radius: 10px;
    }
    .Icon-bottom-Section {
      display: flex;
      width: 84%;
      margin-top: 19px;
      background-color: white;
      color: #b0b0b0;
      height: 40px;
      padding: 8px;
      border-radius: 10px;
    }
    .Icon-Header-Section {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      flex-direction: column;
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
      flex-direction: column;
      margin-bottom: 40px;
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
      width: 184px;
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
      display: flex;
      justify-content: center;
      width: 100%;
      align-items: center;
    }

    .NextButton {
      width: 281px;
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
    .File-Main-Section {
      display: flex;
      width: 275px;
      height: 241px;
      margin-left: 12px;
      border: 4px dotted #d9d9d9;
    }
    .Main-Title {
      width: 200px;
    }
  }
`;
