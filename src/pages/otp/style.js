import styled from "styled-components";

export const OtppageStyled = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #1e0652;
  .Signup-Main-Section {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
  .Navbar-Container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Welcome-Section {
    display: flex;
    align-items: baseline;
    flex-direction: column;
    width: 100%;
  }
  .Contact-1 {
    color: white;
  }
  .Signup-Navbar-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    border-radius: 20px;
    height: 60px;
    border: 2px solid #8154e4;
    width: 57%;
    background-color: #382463;
  }

  .navbar {
    display: flex;
    width: 90%;
    justify-content: space-between;

    align-items: center;
    color: white;
  }

  .Nav-Logo {
    width: 160px;
  }
  .nav-Text-Section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  .nav-Text {
    font-size: 14px;
    gap: 3px;
    display: flex;
    align-items: center;
    font-weight: 600;
  }
  .Nav-Icon {
    width: 30px;
  }
  .Form-Section {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }

  .ContactFormSide {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-right: 90px;
    gap: 35px;
  }
  .Sign-Form-Section {
    display: flex;
  }
  .Sign-Form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 370px;
  }
  .NameBox {
    width: 315px;
    height: 37px;
    font-size: 17px;
    border: none;
    outline: none;
    color: #5d646e;
    background-color: #402b6c;
  }
  .FormBox {
    border: 2px #916ae8 solid;
    padding: 4px;
    border-radius: 9px;
    cursor: pointer;
    display: flex;
    background-color: #402b6c;
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
  .Character-Text {
    font-size: 16px;
    color: #8b97a8;
  }
  .Privacy-Text {
    width: 391px;
    font-size: 16px;
  }
  .Sign-Button-Section {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Sign-UP-Button {
    height: 45px;
    width: 380px;
    border: none;
    border-radius: 10px;
    background-color: #591ddd;
    color: white;
    font-size: 17px;

    font-weight: 400;
  }
  .Sign-UP-Button:hover {
    background-color: black;
  }
  .Log-text-Section {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .log-Text {
    color: #8b97a8;
    font-size: 17px;
  }
  .Log {
    font-size: 18px;
    padding: 4px;

    font-weight: 500;
    cursor: pointer;
  }
  .EyeIcon {
    width: 25px;
    height: 17px;
    color: #8b97a8;
  }
  .Welcome-Text {
    font-size: 18px;
    color: white;
    font-weight: 600;
  }
  .Forget-Text-Section {
    display: flex;
    gap: 10px;
    width: 100%;
    align-items: center;
  }
  .Forget-Text {
    font-size: 18px;
    padding: 4px;
    color: #34a1f4;
    font-weight: 500;
    cursor: pointer;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 55px;
    height: 27px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
  }
  .Form-Box-Title {
    font-size: 17px;
    color: white;
  }
  .Form-Box-Text {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 4px;
    background-color: #591ddd;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #e0e0e0;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
  .Signup-Image-Section {
    display: flex;
    margin-top: -81px;
  }
  .Signup-Container {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .Sign-Logo {
    width: 664px;
  }
  .Signup-Background-Adjustment {
    display: flex;
    gap: 100px;
    width: 100%;
    justify-content: flex-end;
  }
  .Footer-Main-Section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    color: white;
    gap: 40px;
  }
  .Footer-CopyRight {
    font-size: 18px;
    font-weight: 700;
  }
  .Footer-Text {
    font-size: 17px;
    font-weight: 500;
  }
`;
