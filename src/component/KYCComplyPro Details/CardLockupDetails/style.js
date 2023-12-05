import styled from "styled-components";

export const ThirdviewStyled = styled.div`
  display: flex;

  .Third-View-Main-Section {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
  }
  .Third-View-Container {
    display: flex;
    background-color: #faf8ff;
    flex-direction: column;
    height: 294px;
    border-radius: 17px;
  }
  .Third-Header-Section {
    display: flex;
    margin-left: 43px;
    flex-direction: column;
  }
  .Third-View-Title {
    margin-top: -60px;
  }
  .Third-View-Text {
    color: #999999;
    font-size: 19px;
    font-weight: 500;
  }
  .GeneralSection {
    width: 400px;
    background-color: #efeef2;
    height: 130px;
    border-radius: 12px;
    margin-left: 30px;
  }
  .General-Info-Section {
    display: flex;
    margin-left: 33px;
    margin-top: 40px;
    font-size: 18px;
    padding-bottom: 20px;
    font-weight: 700;
  }
  .Number-Section {
    display: flex;
    justify-content: end;
    margin-top: 20px;
    font-size: 16px;
    color: #7a7a7b;
    padding-right: 13px;
  }
  .LockupDetails {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    padding-left: 13px;
    font-size: 16px;
    color: #7a7a7b;
  }
  @media all and (max-width: 800px) {
    .Third-View-Title {
      margin-top: 0px;
    }
    .GeneralSection {
      width: 340px;
      background-color: #efeef2;
      height: 130px;
      border-radius: 12px;
      margin-left: 21px;
    }
  }
`;
