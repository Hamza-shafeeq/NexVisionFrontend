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
    /* margin-top: 50px; */
    background-color: #faf8ff;
    width: 100%;
    flex-direction: column;
    height: 450px;
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
    /* display: flex;
    justify-content: center;
    align-items: center; */
    /* flex-direction: column; */
    padding-bottom: 100px;
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
    /* display: flex;
    align-items: center;
    justify-content: center; */
    background-color: #efeef1;
    width: 100%;
    height: 60px;

    /* gap: 69px;
    width: 100%;
    font-size: 17px;
    height: 100px;
    border-radius: 12px; */
  }

  .General-Table-Section {
    width: 1000px;
    text-align: center;
    height: 130px;
  }

  .General-Bottom-Section {
    /* display: flex;
    align-items: center; */

    background-color: #ffffff;
    width: 100%;
    height: 60px;
    /* justify-content: center;

    gap: 63px;
    font-size: 17px;
    width: 100%;
    height: 100px;
    border-radius: 10px; */
  }

  .button-container {
    display: flex;
    justify-content: end;
    gap: 10px;
    align-items: center;
    width: 90%;
    height: 150px;
  }
  .Previous-Button {
    width: 124px;
    height: 42px;
    border-radius: 6px;
    border: 3px solid #591ddd;
    background-color: #ffffff;
  }
  .Number-Button {
    border-radius: 6px;
    border: 3px solid #591ddd;
    background-color: #ffffff;
    width: 40px;
    height: 38px;
  }
  .Next-Button {
    width: 115px;
    height: 43px;
    border-radius: 6px;
    background-color: #591ddd;
    color: #ffffff;
    border: none;
  }
`;
