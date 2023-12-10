import styled from "styled-components";

export const MapStyle = styled.div`
  .map-h2 {
    text-transform: uppercase;
    font-size: 1rem;
    padding: 20px;
    padding-left: 10px;
    text-align: center;
  }
  .map {
    height: 80vh;
    width: 100%;
  }
  .google-map {
    width: 100%;
    height: 60vh;
  }
  .Text-Section {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .Region-text {
    font-size: 18px;
  }
  .Select-text {
    font-size: 16px;
    font-weight: 700;
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
  .pin {
    display: flex;
    align-items: center;
    width: 180px;
    color: var(--main-blue);
  }

  .pin-icon {
    font-size: 4rem;
  }
  .NameBox::placeholder {
    color: black; /* Change this to your desired color */
  }

  .pin-text {
    font-size: 1.3em;
  }

  .NameBox {
    width: 110px;
    height: 33px;
    font-size: 17px;
    border: none;
    outline: none;
    color: black;
    background-color: #efeef2;
  }
  .FormBox {
    border: 2px #e6ebf2 solid;
    padding: 4px;
    border-radius: 9px;
    cursor: pointer;
    display: flex;
    background-color: #efeef2;
    align-items: center;
    width: 338px;
  }
  .button-container {
    display: flex;
    justify-content: end;
    gap: 10px;
    padding-bottom: 10px;
    align-items: center;
    width: 94%;
  }
  .Next-Button {
    width: 115px;
    height: 43px;
    border-radius: 6px;
    background-color: #591ddd;
    color: #ffffff;
    border: none;
  }
  .Box-Section {
    display: flex;
    gap: 10px;
    flex-direction: column;
    padding-left: 30px;
    width: 90%;
    background-color: #faf8ff;
  }

  .FormIcon {
    color: #591ddd;
    width: 20px;
  }
  .Detail-title {
    font-size: 18px;
  }
  .Detail-title1 {
    font-size: 18px;
    padding-right: 10px;
  }
  .Title-box {
    width: 39%;
    display: flex;
    justify-content: space-between;
  }
  @media screen and (min-width: 799px) {
    .google-map {
      height: 80vh;
    }

    .map-h2 {
      font-size: 1.3rem;
      font-weight: 400;
    }

    .pin {
      width: 15vw;
    }

    .pin-icon {
      font-size: 10vw;
    }
  }

  @media all and (max-width: 600px) {
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
  }
  @media all and (max-width: 560px) {
    .General-Buttons-Section {
      width: 113px;
      display: flex;
      justify-content: center;
      width: 100%;
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
  }
  @media all and (max-width: 343px) {
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
