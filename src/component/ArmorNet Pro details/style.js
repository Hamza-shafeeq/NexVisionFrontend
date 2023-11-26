import styled from "styled-components";

export const PhoneLookupDetailsStyled = styled.div`
  display: flex;
  background-color: white;
  .Phone-Lookup-Main-Section {
    display: flex;
  }
  .Phone-Lookup-Container {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
  .Phone-Lookup-Section {
    display: flex;
    margin-left: 43px;
    flex-direction: column;
  }
  .Phone-Lookup-Title {
    margin-top: -60px;
  }
  .Phone-Lookup-Text {
    color: #999999;
    font-size: 19px;
    font-weight: 500;
  }
  .phone-lookup-deatils {
    background-color: #faf8ff;
    display: flex;
    /* width: 100%; */
    justify-content: start;
    align-items:center;
    height :250px;
    gap:100px;
    padding-left:50px;

  }
  .phone-lookup-input {
    height: 55px;
    width: 400px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    border: none;
    background-color: #e7e7e7;

  }
  .phone-lookup-fields {
  }
`;
