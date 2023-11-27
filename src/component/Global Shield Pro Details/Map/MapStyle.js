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
    height: 100vh;
    width: 100%;
  }
  .google-map {
    width: 100%;
    height: 60vh;
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

    width: 16%;
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
    width: 97.5%;
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
`;
