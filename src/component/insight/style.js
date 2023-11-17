import styled from "styled-components";

export const InsightStyled = styled.div`
  background-color: #1e0652;
  display: flex;
  width: 100%;
  .Insight-Main-Page {
    display: flex;
    width: 80%;
    justify-content: center;
  }
  .Insight-Container {
    display: flex;
    width: 100%;
    /* justify-content: end */
    flex-direction:column;

    flex-wrap: wrap;
  }
  .Credit-Main-Section {
    display: flex;
    justify-content:flex-end;
  }
  .Credit-Section {
    width: 156px;
    border-radius: 13px;
    display: flex;
    justify-content: center;
    margin-right: 20px;
    align-items: center;
    height: 40px;
    font-size: 16px;
    font-weight: 600;
    margin-top: 30px;
    background-color: #4e3764;
  }
  .Credit {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    gap: 7px;
  }
  .Coin-icon {
    height: 26px;
    width: 30px;
  }
  .Avatar-Main-Section {
    display: flex;
    background-color: #402b6c;
    width: 200px;
    height: 64px;
    margin-top: 20px;
    margin-right: 18px;
    justify-content: center;
    align-items: center;
    border-radius: 18px;
    gap: 5px;
  }
  .Avatar-Title {
    font-size: 13px;
    font-weight: 700;
    color: #7a7094;
  }
  .Avatar-Text {
    font-size: 14px;

    color: white;
  }
  .Manager-Avatar {
    height: 45px;
  }
  .Avatar-Text-Section {
    display: flex;
    flex-direction: column;
  }
`;
