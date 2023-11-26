import styled from "styled-components";

export const ValidityDetailsStyled = styled.div`
  display: flex;
  background-color: white;
  .Validity-Main-Section {
    display: flex;
  }
  .Validity-Container {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
  .Validity-Section {
    display: flex;
    margin-left: 43px;
    flex-direction: column;
  }
  .Validity-Title {
    margin-top: -60px;
  }
  .Validity-Text {
    color: #999999;
    font-size: 19px;
    font-weight: 500;
  }
  .Validity-deatils {
    background-color: #faf8ff;
    display: flex;
    /* width: 100%; */
    justify-content: start;
    align-items:center;
    height :250px;
    gap:100px;
    padding-left:50px;

  }
  .Validity-input {
    height: 55px;
    width: 400px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    border: none;
    background-color: #e7e7e7;
  }
`;
