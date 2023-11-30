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
`;
