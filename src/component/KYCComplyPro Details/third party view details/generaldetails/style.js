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
    margin-top: 50px;
    background-color: #faf8ff;
    width: 90%;
    flex-direction: column;
    height: 250px;
    margin-left: 50px;

    align-items: center;
    justify-content: center;
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 1000px;
    height: 130px;
  }
  .General-Info-Section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 960px;
    font-size: 18px;
    font-weight: 700;
    height: 60px;
  }
  .General-Top-Section {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #efeef1;
    gap: 69px;
    width: 100%;
    font-size: 17px;
    height: 100px;
    border-radius: 12px;
  }
  .General-Bottom-Section {
    display: flex;
    align-items: center;

    background-color: #ffffff;
    justify-content: center;

    gap: 63px;
    font-size: 17px;
    width: 100%;
    height: 100px;
    border-radius: 10px;
  }
`;
