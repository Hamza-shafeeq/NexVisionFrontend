import styled from "styled-components";

export const OtppageStyled = styled.div`
  width: 100%;
  height: 100vh;

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
    color: #591ddd;
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
    background-color: #eae5f6;
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
    gap: 20px;
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
    padding-left: 10px;
  }
  .FormBox {
    border: 2px #916ae8 solid;
    padding: 4px;
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

  .Form-Box-Title {
    font-size: 17px;
  }
  .Form-Box-Text {
    display: flex;
    flex-direction: column;
    gap: 10px;
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
  @media all and (max-width: 1240px) {
    .Signup-Background-Adjustment {
      gap: 0px;
    }
  }
  @media all and (max-width: 1110px) {
    .Signup-Background-Adjustment {
      gap: 0px;
    }
    .Sign-Logo {
      width: 450px;
      height: 500px;
    }
    .Sign-UP-Button {
      height: 45px;
      width: 250px;
      border: none;
      border-radius: 10px;
      background-color: #591ddd;
      color: white;
      font-size: 17px;

      font-weight: 400;
    }
    .NameBox {
      width: 210px;
      height: 37px;
      font-size: 17px;
      border: none;
      outline: none;
      color: #5d646e;
    }
    .Welcome-Text {
      font-size: 17px;

      font-weight: 600;
    }
    .Contact {
      font-size: 20px;
      color: #591ddd;
      margin-top: 10px;
    }
    .FormBox {
      border: 2px #916ae8 solid;
      padding: 4px;
      border-radius: 9px;
      cursor: pointer;
      display: flex;
      background-color: white;
      align-items: center;
      width: 290px;
    }
    .ContactFormSide {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding-right: 10px;
      margin-top: 20px;
      gap: 30px;
    }
    .Nav-Logo {
      width: 120px;
    }
    .nav-Text {
      font-size: 11px;
      gap: 3px;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
  }
  @media all and (max-width: 870px) {
    .Sign-Logo {
      width: 0px;
    }
    .Signup-Background-Adjustment {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
    }
    .Sign-UP-Button {
      height: 45px;
      width: 300px;
      border: none;
      border-radius: 10px;
      background-color: #591ddd;
      color: white;
      font-size: 17px;

      font-weight: 400;
    }
    .NameBox {
      width: 260px;
      height: 37px;
      font-size: 17px;
      border: none;
      outline: none;
      color: #5d646e;
      padding-left: 10px;
    }
    .Welcome-Text {
      font-size: 17px;

      font-weight: 600;
    }
    .Contact {
      font-size: 20px;
      color: #591ddd;
      margin-top: 10px;
    }
    .FormBox {
      border: 2px #916ae8 solid;
      padding: 4px;
      border-radius: 9px;
      cursor: pointer;
      display: flex;
      background-color: white;
      align-items: center;
      width: 280px;
    }
    .ContactFormSide {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      margin-top: 20px;
      gap: 30px;
    }
    .Nav-Logo {
      width: 120px;
    }
    .nav-Text {
      font-size: 10px;
      gap: 3px;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    .Signup-Navbar-1 {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      border-radius: 20px;
      height: 60px;
      border: 2px solid #8154e4;
      width: 96%;
      background-color: #eae5f6;
    }
    .Sign-Button-Section {
      display: flex;
      width: 100%;
      justify-content: flex-start;

      align-items: center;
    }
  }
  @media all and (max-width: 627px) {
    .Sign-Logo {
      width: 0px;
    }
    .Signup-Background-Adjustment {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
    }
    .Sign-UP-Button {
      height: 45px;
      width: 295px;
      border: none;
      border-radius: 10px;
      background-color: #591ddd;
      color: white;
      font-size: 17px;

      font-weight: 400;
    }
    .nav-Text-Section {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2px;
    }
    .Footer-CopyRight {
      font-size: 13px;
      font-weight: 700;
    }
    .Footer-Text {
      font-size: 13px;
      font-weight: 500;
    }
    .Log-text-Section {
      display: flex;
      width: 100%;
      justify-content: flex-start;
    }
    .log-Text {
      color: #8b97a8;
      font-size: 14px;
    }
    .NameBox {
      width: 260px;
      height: 37px;
      font-size: 17px;
      border: none;
      outline: none;
      color: #5d646e;
      padding-left: 10px;
    }
    .Welcome-Text {
      font-size: 17px;

      font-weight: 600;
    }
    .Contact {
      font-size: 20px;
      color: #591ddd;
      margin-top: 10px;
    }
    .FormBox {
      border: 2px #916ae8 solid;
      padding: 4px;
      border-radius: 9px;
      cursor: pointer;
      display: flex;
      background-color: white;
      align-items: center;
      width: 280px;
    }
    .Footer-Main-Section {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 100px;
      gap: 10px;
    }
    .Footer-CopyRight {
      font-size: 13px;
      font-weight: 700;
    }
    .Footer-Text {
      font-size: 13px;
      font-weight: 500;
    }
    .ContactFormSide {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      margin-top: 20px;
      gap: 30px;
    }
    .Nav-Logo {
      width: 100px;
    }
    .nav-Text {
      font-size: 10px;

      display: flex;
      align-items: center;
      font-weight: 600;
    }
    .Signup-Navbar-1 {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      border-radius: 20px;
      height: 60px;
      border: 2px solid #8154e4;
      width: 98%;
      background-color: #eae5f6;
    }
    .Sign-Button-Section {
      display: flex;
      width: 100%;
      justify-content: flex-start;

      align-items: center;
    }
  }
  @media all and (max-width: 457px) {
    .Sign-Logo {
      width: 0px;
    }
    .Signup-Background-Adjustment {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
    }
    .Sign-UP-Button {
      height: 45px;
      width: 295px;
      border: none;
      border-radius: 10px;
      background-color: #591ddd;
      color: white;
      font-size: 17px;

      font-weight: 400;
    }
    .nav-Text-Section {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2px;
    }
    .Footer-CopyRight {
      font-size: 13px;
      font-weight: 700;
    }
    .Footer-Text {
      font-size: 13px;
      font-weight: 500;
    }
    .Log-text-Section {
      display: flex;
      width: 100%;
      justify-content: center;
    }
    .log-Text {
      color: #8b97a8;
      font-size: 14px;
    }
    .NameBox {
      width: 260px;
      height: 37px;
      font-size: 17px;
      border: none;
      outline: none;
      color: #5d646e;
      padding-left: 10px;
    }
    .Welcome-Text {
      font-size: 17px;

      font-weight: 600;
    }
    .Contact {
      font-size: 20px;
      color: #591ddd;
      margin-top: 10px;
    }
    .FormBox {
      border: 2px #916ae8 solid;
      padding: 4px;
      border-radius: 9px;
      cursor: pointer;
      display: flex;
      background-color: white;
      align-items: center;
      width: 280px;
    }
    .Welcome-Section {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
    }
    .Footer-Main-Section {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-top: 100px;
      gap: 10px;
    }
    .Footer-CopyRight {
      font-size: 13px;
      font-weight: 700;
    }
    .Footer-Text {
      font-size: 13px;
      font-weight: 500;
    }
    .ContactFormSide {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      margin-top: 20px;
      gap: 30px;
    }
    .Nav-Logo {
      width: 70px;
    }
    .nav-Text {
      font-size: 9px;
      white-space: break-spaces;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    .Signup-Navbar-1 {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      border-radius: 20px;
      height: 60px;
      border: 2px solid #8154e4;
      width: 96%;
      background-color: #eae5f6;
    }
    .Sign-Button-Section {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
    }
    .Sign-Form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 370px;
      justify-content: center;
      align-items: center;
    }
    .Forget-Text-Section {
      display: flex;
      gap: 10px;
      width: 80%;
      align-items: center;
    }
    .Signup-Container {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
    }
  }
  @media all and (max-width: 380px) {
    .Sign-Logo {
      width: 0px;
    }
    .Signup-Background-Adjustment {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
    }
    .Sign-UP-Button {
      height: 45px;
      width: 255px;
      border: none;
      border-radius: 10px;
      background-color: #591ddd;
      color: white;
      font-size: 17px;

      font-weight: 400;
    }
    .nav-Text-Section {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2px;
    }
    .Footer-CopyRight {
      font-size: 13px;
      font-weight: 700;
    }
    .Footer-Text {
      font-size: 13px;
      font-weight: 500;
    }
    .Log-text-Section {
      display: flex;
      width: 100%;
      justify-content: center;
    }
    .log-Text {
      color: #8b97a8;
      font-size: 14px;
    }
    .NameBox {
      width: 260px;
      height: 37px;
      font-size: 17px;
      border: none;
      outline: none;
      color: #5d646e;
      padding-left: 10px;
    }
    .Welcome-Text {
      font-size: 17px;
      font-weight: 600;
      width: 215px;
      display: flex;
      justify-content: center;
      text-align: center;
    }
    .Contact {
      font-size: 20px;
      color: #591ddd;
      margin-top: 10px;
    }
    .FormBox {
      border: 2px #916ae8 solid;
      padding: 4px;
      border-radius: 9px;
      cursor: pointer;
      display: flex;
      background-color: white;
      align-items: center;
      width: 255px;
    }
    .Welcome-Section {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 89%;
    }
    .Form-Box-Text {
      display: flex;
      flex-direction: column;
      gap: 10px;
      justify-content: center;
      width: 90%;
    }

    .Footer-Main-Section {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-top: 100px;
      gap: 10px;
    }
    .Footer-CopyRight {
      font-size: 13px;
      font-weight: 700;
    }
    .Footer-Text {
      font-size: 13px;
      font-weight: 500;
    }
    .ContactFormSide {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      margin-top: 20px;
      gap: 30px;
    }
    .Nav-Logo {
      width: 70px;
    }
    .nav-Text {
      font-size: 9px;
      white-space: break-spaces;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    .Nav-Icon {
      width: 15px;
    }
    .Signup-Navbar-1 {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      border-radius: 20px;
      height: 60px;
      border: 2px solid #8154e4;
      width: 100%;
      background-color: #eae5f6;
    }
    .Sign-Button-Section {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
    .Sign-Form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 300px;
      justify-content: center;
      align-items: center;
    }

    .Forget-Text-Section {
      display: flex;
      gap: 10px;
      width: 80%;
      align-items: center;
    }
    .Signup-Container {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
    }
  }
`;
