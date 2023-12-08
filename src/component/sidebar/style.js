import styled from "styled-components";

export const SidebarStyled = styled.div`
  display: flex;
  width: 100%;

  .SidebarMenu {
    background-color: #220367;
    width: 300px;
    height: 100%;

    border-right: 1px solid #72668d;
  }
  .Sidebar-Main-Section {
    display: flex;
    flex-direction: column;
    width: 95%;
  }
  .Sidebar-Main-Logo {
    display: flex;
    justify-content: center;
  }
  .Sidebar-Logo-Section {
    border-bottom: 2px solid #72668d;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .Sidebar-Logo {
    padding-top: 10px;
    width: 163px;
  }
  .Sidebar-Main-Title-Section {
    padding-left: 40px;
    font-size: 14px;
    font-weight: 500;
    color: #7a7094;
  }
  .Sidebar-Links-Set {
    display: flex;
  }

  .Sidebar-Links {
    display: flex;
    gap: 13px;
    padding-left: 35px;
    color: white;
    align-items: center;
    font-weight: 550;
    font-size: 15px;
    margin-bottom: 10px;
    cursor: pointer;
    height: 40px;
    justify-content: space-between;
    white-space: nowrap;
  }
  .Sidebar-Links2 {
    display: flex;
    gap: 13px;
    padding-left: 35px;
    color: white;
    align-items: center;
    font-weight: 550;
    font-size: 15px;
    margin-bottom: 10px;
    cursor: pointer;
    height: 40px;

    white-space: nowrap;
  }
  .Sidebar-Links-section {
    display: flex;
    gap: 13px;
    padding-left: 35px;
    color: white;
    align-items: center;
    font-weight: 550;
    font-size: 15px;
    margin-bottom: 10px;
    cursor: pointer;
    height: 40px;

    white-space: nowrap;
  }
  .Sidebar-Links2:hover {
    width: 210px;
    border-radius: 11px;

    background-color: #4617b2;
  }
  .Sidebar-Links4 {
    display: flex;
    gap: 10px;
    padding-left: 35px;
    color: white;
    align-items: center;
    font-weight: 550;
    font-size: 15px;
    margin-bottom: 10px;
    cursor: pointer;
    height: 40px;
    justify-content: space-between;
    white-space: nowrap;
  }
  .Sidebar-Links4:hover {
    width: 210px;
    border-radius: 11px;

    background-color: #4617b2;
  }
  .Sidebar-Links6 {
    display: flex;
    gap: 10px;
    padding-left: 35px;
    color: white;
    align-items: center;
    font-weight: 550;
    font-size: 15px;
    margin-bottom: 10px;
    cursor: pointer;
    height: 40px;
    white-space: nowrap;
  }
  .Sidebar-Links6:hover {
    width: 210px;
    border-radius: 11px;

    background-color: #4617b2;
  }
  .Sidebar-Links-drown {
    display: flex;
    gap: 10px;
    margin-left: 10px;
    color: white;
    align-items: center;

    justify-content: flex-start;
    font-size: 13px;
    margin-bottom: 10px;
    padding-left: 30px;
    cursor: pointer;
    height: 40px;
    white-space: nowrap;
  }
  .Sidebar-Links-drown:hover {
    width: 200px;
    border-radius: 11px;

    background-color: #4617b2;
  }
  .Sidebar-Links.active {
    width: 210px;
    border-radius: 11px;
    margin-left: 10px;

    gap: 8px;
    background-color: #4617b2;
  }
  .Sidebar-Links:hover {
    width: 210px;
    border-radius: 11px;

    background-color: #4617b2;
  }
  .sidebar-container {
    display: flex;

    width: 100%;
  }
  .Links-Logo {
    width: 30px;
    height: 20px;
    color: white;
    margin-right: 10px;
  }

  .Sidebar-Main-Admin-Tools {
    width: 100%;
    margin-bottom: 80px;
  }
  .Sidebar-Admin-Tools {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .Sidebar-Main-Title {
    padding-left: 40px;
    font-size: 13px;
    font-weight: 500;
    color: #7a7094;
  }
  .Border {
    border-bottom: 2px solid #72668d;
    margin-left: 20px;
    width: 80%;
    display: flex;
    justify-content: center;
  }
  .Sidebar-Admin-Links {
    color: #cc8889;
    display: flex;
    gap: 13px;
    padding-left: 35px;

    align-items: center;
    font-weight: 550;
    font-size: 15px;
    margin-bottom: 10px;
    cursor: pointer;
    height: 40px;
    white-space: nowrap;
  }
  .Sidebar-Admin-Links {
    width: 189px;
    border-radius: 11px;

    gap: 8px;
    background-color: #4617b2;
  }
  .Sidebar-Links1 {
    color: #cc8889;
    display: flex;
    gap: 13px;
    padding-left: 35px;

    align-items: center;
    font-weight: 550;
    font-size: 15px;
    margin-bottom: 10px;
    cursor: pointer;
    height: 40px;
    white-space: nowrap;
  }
  .Sidebar-Links1:hover {
    width: 210px;
    border-radius: 11px;

    display: flex;

    background-color: #4617b2;
  }
  .Credit-Main-Section {
    display: flex;
    flex-direction: column;

    width: 100%;
  }
  .sidebar-header {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
    width: 88%;
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
    background-color: #fff5cf;
  }

  .Credit {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f0d25a;
    gap: 7px;
  }
  .Coin-icon {
    height: 26px;
    width: 30px;
  }
  .Avatar-Main-Section {
    display: flex;
    background-color: #e9dffe;
    width: 200px;
    height: 64px;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    border-radius: 18px;
    gap: 5px;
  }
  .Avatar-Title {
    font-size: 14px;
    font-weight: 400;

    color: #2d2f39;
  }
  .Avatar-Text {
    font-size: 15px;
    font-weight: 500;
    color: #2d2f39;
  }
  .Manager-Avatar {
    height: 45px;
  }
  .Avatar-Text-Section {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .ArrowIcon-Hamberg {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #73678f;
    background-color: #150144;
    width: 25px;
    height: 25px;
    border-radius: 7px;
  }

  .ArrowIcon {
    transition: transform 0.3s ease;
    color: white;
  }

  .arrow-closed {
    transform: rotate(0deg); /* or your preferred angle */
  }

  .arrow-open {
    transform: rotate(180deg); /* or the opposite angle */
  }

  @media all and (max-width: 700px) {
    .SidebarMenu {
      background-color: #220367;
      width: 250px;
      height: 942px;
      position: absolute;
      border-right: 1px solid #72668d;
    }
    .Credit-Main-Section {
      display: flex;
      flex-direction: column;

      width: 100%;
    }
    .sidebar-header {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 10px;
      width: 100%;
    }
    .Credit-Section {
      width: 130px;
      border-radius: 13px;
      display: flex;
      justify-content: center;
      margin-right: 20px;
      align-items: center;
      height: 40px;
      font-size: 16px;
      font-weight: 600;
      margin-top: 30px;
      background-color: #fff5cf;
    }
    .Avatar-Title {
      font-size: 12px;
      font-weight: 400;
      color: #2d2f39;
      width: 106px;
    }
    .Avatar-Text {
      font-size: 13px;
      font-weight: 500;
      color: #2d2f39;
    }
    .Avatar-Main-Section {
      display: flex;
      background-color: #e9dffe;
      width: 175px;
      height: 57px;
      margin-top: 20px;
      justify-content: center;
      align-items: center;
      border-radius: 18px;
      gap: 5px;
    }
    .Manager-Avatar {
      height: 35px;
    }
  }
  @media all and (max-width: 440px) {
    .SidebarMenu {
      background-color: #220367;
      width: 250px;
      height: 942px;
      position: absolute;
      border-right: 1px solid #72668d;
    }
    .Credit-Main-Section {
      display: flex;
      flex-direction: column;

      width: 100%;
    }
    .sidebar-header {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 10px;
      width: 100%;
    }
    .Credit-Section {
      width: 117px;
      border-radius: 13px;
      display: flex;
      justify-content: center;
      margin-right: 6px;
      align-items: center;
      flex-direction: column;
      height: 40px;
      font-size: 13px;
      font-weight: 600;
      margin-top: 30px;
      background-color: #fff5cf;
    }
    .Avatar-Title {
      font-size: 12px;
      font-weight: 400;
      color: #2d2f39;
      width: 106px;
    }
    .Avatar-Text {
      font-size: 13px;
      font-weight: 500;
      color: #2d2f39;
    }
    .Avatar-Main-Section {
      display: flex;
      background-color: #e9dffe;
      width: 156px;
      height: 50px;
      margin-top: 20px;
      justify-content: center;
      align-items: center;
      border-radius: 18px;
      gap: 5px;
    }
    .Manager-Avatar {
      height: 35px;
    }
  }
`;
