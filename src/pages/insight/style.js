import styled from "styled-components";

export const InsightStyled = styled.div`
  display: flex;
  background-color: white;
  width: 100%;

  .InsightAi-Main-Section {
    width: 100%;
    height: 100%;
    background-color: white;
  }
  .Insight-Main-Page {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .Insight-Container {
    display: flex;
    width: 95%;
    justify-content: end;
    height: 100px;
    flex-wrap: wrap;
  }
  .Credit-Main-Section {
    display: flex;
    height: 100px;
  }

  .NexVision-Main-Section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 83%;

    margin-bottom: 40px;
  }
  .Ai-Text-Section {
    display: flex;
    justify-content: center;
    color: #ececec;

    flex-direction: column;
  }
  .Ai-Title {
    font-size: 38px;
    font-weight: 700;
    color: #591ddd;
  }
  .Ai-Text {
    font-size: 16px;
    width: 747px;
    color: black;
  }
  .Ai-Stars {
    font-size: 18px;
    font-weight: 500;
    display: flex;
    padding-top: 5px;
    align-items: center;
    padding-bottom: 20px;
    color: #591ddd;
  }
  .Star {
    color: yellow;
    padding: 4px;
  }
  .Card-Main-Section {
    width: 350px;
    background-color: red;
  }
  .Examples-Card-Section {
    display: flex;
    width: 334px;

    height: 300px;
    justify-content: center;

    margin-bottom: 10px;
    border-radius: 30px;
  }
  .Examples-Cards-Container {
    display: flex;
    background-color: #eee6fe;
    width: 100%;
    flex-direction: column;
    border-radius: 19px;
  }
  .Examples-Logo {
    width: 41px;
    margin-bottom: 10px;
  }
  .Examples-Text-Section {
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 5px;
  }
  .Example-Title {
    margin-left: 20px;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 15px;
  }
  .Examples-Text-Section {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: baseline;
  }
  .Examples-Image {
    display: flex;
    width: 150px;
  }
  .Examples-Text {
    font-size: 14px;
    font-weight: 600;
  }
  .Examples-Card-Logo {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin-top: 17px;
  }
  .Example-Title1 {
    margin-left: 20px;
    font-weight: 600;
    font-size: 20px;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
  .Card-Rotating {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }
  .NameBox {
    width: 820px;
    height: 37px;
    font-size: 17px;
    background-color: #f9f9f9;
    border: none;
    padding-left: 10px;
    outline: none;
  }
  .FormBox {
    background-color: #f9f9f9;
    padding: 4px;
    border-radius: 9px;
    width: 900px;
    cursor: pointer;
  }
  .Inquiry-Box-Section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    width: 100%;
    gap: 22px;
  }
  ::placeholder {
    color: #9081b2;
  }
  .Generate-Button {
    display: flex;
    width: 120px;
    justify-content: center;
    height: 50px;
    align-items: center;
    border: none;
    background-color: #591ddd;
    color: #ded2f8;
    border-radius: 11px;
  }
  @media all and (max-width: 1240px) {
    .Ai-Text {
      font-size: 16px;
      width: 440px;
      color: black;
    }
    .Ai-Title {
      font-size: 24px;
      font-weight: 700;
      color: #591ddd;
    }
    .Card-Rotating {
      display: flex;
      gap: 10px;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .NameBox {
      width: 363px;
      height: 37px;
      font-size: 17px;
      background-color: #f9f9f9;
      border: none;
      outline: none;
      padding-left: 10px;
    }
    .FormBox {
      background-color: #f9f9f9;
      padding: 4px;
      border-radius: 9px;
      width: 331px;
      cursor: pointer;
    }
    .Generate-Button {
      display: flex;
      width: 120px;
      justify-content: center;
      height: 50px;
      align-items: center;
      border: none;
      background-color: #591ddd;
      color: #ded2f8;
      margin-left: 24px;
      border-radius: 11px;
    }
    .NexVision-Main-Section {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-bottom: 40px;
    }
    .Ai-Text-Section {
      display: flex;
      justify-content: center;
      color: #ececec;
      flex-direction: column;
      width: 47%;
    }
    .Ai-Text-Section {
      display: flex;
      justify-content: center;
      color: #ececec;
      flex-direction: column;
    }
  }
  @media all and (max-width: 1140px) {
    .Ai-Text {
      font-size: 16px;
      width: 440px;
      color: black;
    }
    .Ai-Title {
      font-size: 24px;
      font-weight: 700;
      color: #591ddd;
    }
    .Card-Rotating {
      display: flex;
      gap: 10px;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .NameBox {
      width: 363px;
      height: 37px;
      font-size: 17px;
      background-color: #f9f9f9;
      border: none;
      outline: none;
      padding-left: 10px;
    }
    .FormBox {
      background-color: #f9f9f9;
      padding: 4px;
      border-radius: 9px;
      width: 331px;
      cursor: pointer;
    }
    .Generate-Button {
      display: flex;
      width: 120px;
      justify-content: center;
      height: 50px;
      align-items: center;
      border: none;
      background-color: #591ddd;
      color: #ded2f8;
      margin-left: 24px;
      border-radius: 11px;
    }
    .NexVision-Main-Section {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-bottom: 40px;
    }
    .Ai-Text-Section {
      display: flex;
      justify-content: center;
      color: #ececec;
      flex-direction: column;
      width: 47%;
    }
    .Ai-Text-Section {
      display: flex;
      justify-content: center;
      color: #ececec;
      flex-direction: column;
    }
  }
  @media all and (max-width: 900px) {
    .Ai-Text {
      font-size: 16px;
      width: 440px;
      color: black;
    }
    .Ai-Title {
      font-size: 24px;
      font-weight: 700;
      color: #591ddd;
    }
    .Card-Rotating {
      display: flex;
      gap: 10px;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .NameBox {
      width: 363px;
      height: 37px;
      font-size: 17px;
      background-color: #f9f9f9;
      border: none;
      outline: none;
      padding-left: 10px;
    }
    .FormBox {
      background-color: #f9f9f9;
      padding: 4px;
      border-radius: 9px;
      width: 331px;
      cursor: pointer;
    }
    .Generate-Button {
      display: flex;
      width: 120px;
      justify-content: center;
      height: 50px;
      align-items: center;
      border: none;
      background-color: #591ddd;
      color: #ded2f8;
      margin-left: 24px;
      border-radius: 11px;
    }
    .NexVision-Main-Section {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-bottom: 40px;
    }
    .Ai-Text-Section {
      display: flex;
      justify-content: center;
      color: #ececec;
      flex-direction: column;
      width: 47%;
    }
    .Ai-Text-Section {
      display: flex;
      justify-content: center;
      color: #ececec;
      flex-direction: column;
    }
  }
  @media all and (max-width: 700px) {
    .Ai-Text {
      font-size: 16px;
      width: 260px;
      color: black;
    }
    .Ai-Title {
      font-size: 24px;
      font-weight: 700;
      color: #591ddd;
    }
    .Card-Rotating {
      display: flex;
      gap: 10px;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .Ai-Stars {
      font-size: 18px;
      font-weight: 500;
      display: flex;
      padding-top: 5px;
      align-items: center;
      padding-bottom: 20px;
      color: #591ddd;
      width: 350px;
    }
    .NameBox {
      width: 240px;
      height: 37px;
      font-size: 17px;
      background-color: #f9f9f9;
      border: none;
      outline: none;
      padding-left: 10px;
    }
    .FormBox {
      background-color: #f9f9f9;
      padding: 4px;
      border-radius: 9px;
      width: 268px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .Generate-Button {
      display: flex;
      width: 89px;
      justify-content: center;
      height: 50px;
      align-items: center;
      border: none;
      background-color: #591ddd;
      color: #ded2f8;

      border-radius: 11px;
    }
    .NexVision-Main-Section {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-bottom: 40px;
    }
    .Ai-Text-Section {
      display: flex;
      justify-content: center;
      color: #ececec;
      flex-direction: column;
    }
  }
  @media all and (max-width: 500px) {
    .Ai-Text {
      font-size: 16px;
      width: 216px;
      color: black;
    }

    .Ai-Title {
      font-size: 24px;
      font-weight: 700;
      color: #591ddd;
    }
    .Card-Rotating {
      display: flex;
      gap: 10px;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .NameBox {
      width: 260px;
      height: 37px;
      font-size: 17px;
      background-color: #f9f9f9;
      border: none;
      padding-left: 10px;
      outline: none;
    }
    .FormBox {
      background-color: #f9f9f9;
      padding: 4px;
      border-radius: 9px;
      width: 268px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .Generate-Button {
      display: flex;
      width: 120px;
      justify-content: center;
      height: 50px;
      align-items: center;
      border: none;
      background-color: #591ddd;
      color: #ded2f8;

      border-radius: 11px;
    }
    .NexVision-Main-Section {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-bottom: 40px;
    }
    .Inquiry-Box-Section {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
      gap: 31px;
      flex-direction: column;
    }
    .Ai-Stars {
      font-size: 18px;
      font-weight: 500;
      display: flex;
      padding-top: 5px;
      align-items: center;
      padding-bottom: 20px;
      color: #591ddd;
      width: 245px;
    }
    .Ai-Text-Section {
      display: flex;
      justify-content: center;
      color: #ececec;
      flex-direction: column;
      text-align: center;
    }
  }
  @media all and (max-width: 400px) {
    .Ai-Text {
      font-size: 16px;
      width: 216px;
      color: black;
    }
    .Ai-Text-Section {
      display: flex;
      justify-content: center;
      color: #ececec;
      flex-direction: column;
      width: 61%;
      text-align: center;

      gap: 10px;
    }
    .Ai-Title {
      font-size: 24px;
      font-weight: 700;
      color: #591ddd;
    }
    .Card-Rotating {
      display: flex;
      gap: 5px;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .Examples-Cards-Container {
      display: flex;
      background-color: #eee6fe;
      width: 90%;
      flex-direction: column;
      border-radius: 19px;
    }

    .Examples-Text-Section {
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      align-items: baseline;
      width: 242px;
    }
    .NameBox {
      width: 260px;
      height: 37px;
      font-size: 17px;
      background-color: #f9f9f9;
      border: none;
      padding-left: 10px;
      outline: none;
    }
    .FormBox {
      background-color: #f9f9f9;
      padding: 4px;
      border-radius: 9px;
      width: 268px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .Inquiry-Box-Section {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
      gap: 31px;
      flex-direction: column;
    }
    .Generate-Button {
      display: flex;
      width: 270px;
      justify-content: center;
      height: 49px;
      align-items: center;
      border: none;
      background-color: #591ddd;
      color: #ded2f8;
      border-radius: 11px;
      margin-bottom: 46px;
    }
    .Ai-Stars {
      font-size: 18px;
      font-weight: 500;
      display: flex;
      padding-top: 5px;
      align-items: center;
      padding-bottom: 20px;
      color: #591ddd;
      width: 231px;
    }
    .Examples-Card-Section {
      display: flex;
      width: 295px;
      height: 300px;
      justify-content: center;
      margin-bottom: 10px;
      border-radius: 30px;
    }
    .Generate-button-Main {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 86%;
    }
  }
`;
