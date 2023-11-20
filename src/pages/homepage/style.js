import styled from "styled-components";

export const HomepageStyled = styled.div`
  background-color: aqua;
  width: 100%;
  height: 100vh;
  .Navbar-Container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Signup-Navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    border-radius: 20px;
    height: 60px;
    border: 3px solid white;
    width: 70%;
    background-color: transparent;
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
    font-size: 16px;
    font-weight: 600;
  }
  .Nav-Icon {
    width: 30px;
  }
`;
