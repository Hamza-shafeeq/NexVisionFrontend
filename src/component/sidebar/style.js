import styled from "styled-components";

export const SidebarStyled = styled.div`
  background-color: #140041;
  width: 19%;
  z-index: 1;
  margin-left: 15px;

  height: 100%;
  border-right: 1px solid #72668d;
  border-radius: 15px;

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
  }
  .Sidebar-Logo {
    padding-top: 10px;
    width: 225px;
  }
  .Sidebar-Main-Title-Section {
    padding-left: 40px;
    font-size: 14px;
    font-weight: 500;
    color: #7a7094;
  }

  .Sidebar-Links {
    display: flex;
    gap: 4px;
    padding-left: 35px;
    color: #8980a0;
    align-items: center;
    font-weight: 550;
    font-size: 15px;
    margin-bottom: 15px;
  }
  .Links-Logo {
    width: 30px;
    height: 20px;
    color: white;
  }
  .Sidebar-Main-Admin-Tools {
    width: 90%;
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
    margin-left: 10px;
  }
  .Sidebar-Links1 {
    display: flex;
    gap: 4px;
    padding-left: 35px;
    color: #8980a0;
    align-items: center;
    font-weight: 550;
    font-size: 15px;
    padding-bottom: 20px;
  }
`;
