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
    flex-wrap: wrap;
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
    width: 100px;
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
  .Forms-Button {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    gap: 10px;
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
  .ApplyButton {
    width: 113px;
    height: 44px;
    border-radius: 9px;
    background-color: #8154e5;
    color: white;
    font-size: 18px;
    font-weight: 500;
    border: 1px solid #8154e5;
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
    width: 100%;
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
    .NameBox {
      width: 370px;
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
  }
  @media all and (max-width: 837px) {
    .NameBox {
      width: 340px;
      height: 37px;
      font-size: 17px;
      border: none;
      outline: none;
      background-color: #efeef2;
    }
    .Forms-Button {
      display: flex;
      justify-content: center;
      width: 100%;
      align-items: center;
      flex-direction: column;
      gap: 30px;
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
    .Border {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 95%;
      border-bottom: 3px solid #7c7b7f;
      margin-top: 90px;
    }
    .ApplyButton {
      width: 390px;
      height: 44px;
      border-radius: 9px;
      background-color: #8154e5;
      color: white;
      font-size: 18px;
      font-weight: 500;
      border: 1px solid #8154e5;
      margin-bottom: 30px;
    }
  }
  @media all and (max-width: 782px) {
    .NameBox {
      width: 317px;
      height: 37px;
      font-size: 17px;
      border: none;
      outline: none;
      background-color: #efeef2;
    }
    .ApplyButton {
      width: 340px;
      height: 44px;
      border-radius: 9px;
      background-color: #8154e5;
      color: white;
      font-size: 18px;
      font-weight: 500;
      border: 1px solid #8154e5;
      margin-bottom: 30px;
    }
    .Forms-Button {
      display: flex;
      justify-content: center;
      width: 100%;
      align-items: center;
      flex-direction: column;
      gap: 30px;
    }
    .FormBox {
      border: 2px #e6ebf2 solid;
      width: 337px;
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
    .GeneralAdd-Header-Gapping {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-bottom: 40px;
    }
    .General-Add-Header {
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
    }
  }
  @media all and (max-width: 600px) {
    .NameBox {
      width: 360px;
      height: 37px;
      font-size: 17px;
      border: none;
      outline: none;
      background-color: #efeef2;
    }
    .FormBox {
      border: 2px #e6ebf2 solid;
      width: 386px;
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
      display: flex;
      justify-content: center;
      width: 100%;
      align-items: center;
    }
    .ApplyButton {
      width: 380px;
      height: 44px;
      border-radius: 9px;
      background-color: #8154e5;
      color: white;
      font-size: 18px;
      font-weight: 500;
      border: 1px solid #8154e5;
      margin-bottom: 30px;
    }
    .Forms-Button {
      display: flex;
      justify-content: center;
      width: 100%;
      align-items: center;
      flex-direction: column;
      gap: 30px;
    }
    .NextButton {
      width: 280px;
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
    .Third-Party-Title {
      width: 200px;
    }
    .NameBox {
      width: 290px;
      height: 37px;
      font-size: 17px;
      border: none;
      outline: none;
      background-color: #efeef2;
    }
    .ApplyButton {
      width: 300px;
      height: 44px;
      border-radius: 9px;
      background-color: #8154e5;
      color: white;
      font-size: 18px;
      font-weight: 500;
      border: 1px solid #8154e5;
      margin-bottom: 30px;
    }
    .Forms-Button {
      display: flex;
      justify-content: center;
      width: 100%;
      align-items: center;
      flex-direction: column;
      gap: 30px;
    }
    .FormBox {
      border: 2px #e6ebf2 solid;
      width: 300px;
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
      margin-top: 100px;
    }
    .GeneralDataAdd-Container {
      display: flex;
      width: 98%;
      height: 700px;
      background-color: #faf8ff;
      flex-direction: column;
    }
    .General-Add-Header {
      display: flex;
      flex-direction: column;
      width: 285px;
      justify-content: center;
      align-items: center;
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
      width: 280px;
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
    .Icon-bottom-Section {
      display: flex;
      width: 300px;
      margin-top: 19px;
      background-color: white;
      color: #b0b0b0;
      height: 40px;
      padding: 8px;
      border-radius: 10px;
    }
    .Icon-Header-Container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 300px;
      margin-top: 19px;
      background-color: #efeef2;
      height: 40px;
      font-size: 15px;
      padding: 8px;
      border-radius: 10px;
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
    .Third-Party-Title {
      width: 174;
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
      display: flex;
      justify-content: center;
      width: 100%;
      align-items: center;
    }

    .NextButton {
      width: 280px;
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
      margin-top: 150px;
    }
    .GeneralDataAdd-Container {
      display: flex;
      width: 98%;
      height: 700px;
      background-color: #faf8ff;
      flex-direction: column;
    }
    .General-Add-Header {
      display: flex;
      flex-direction: column;
      width: 285px;
    }
    .Icon-bottom-Section {
      display: flex;
      width: 85%;
      margin-top: 19px;
      background-color: white;
      color: #b0b0b0;
      height: 40px;
      padding: 8px;
      border-radius: 10px;
    }
    .Icon-Header-Container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 85%;
      margin-top: 19px;
      background-color: #efeef2;
      height: 40px;
      padding: 8px;
      border-radius: 10px;
      font-size: 13px;
    }
  }
`;
