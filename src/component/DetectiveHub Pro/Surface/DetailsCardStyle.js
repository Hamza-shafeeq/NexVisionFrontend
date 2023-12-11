import styled from "styled-components";

export const DetailsCardStyle = styled.div`
  background-color: #eee6fe;
  width: 340px;
  height: 280px;
  border-radius: 17px;
  /* border: 1px solid black; */
  // box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  // margin-top: 15px;

  .title-text {
    color: black;
    font-size: 16px;
    font-weight: 600;
    margin-left: -10px;
  }
  .title-details-card {
    display: flex;
    align-items: center;
  }

  .title-img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
  }

  .case-id {
    color: black;
    font-weight: 600;
  }

  .status-card-div {
    color: white;
  }

  .case-id-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left:31px;
    padding-right:31px;

  }
  .status-card {
    font-weight: 600;
    color: black;
  }
  .status-card-div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .status {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85px;
    height: 25px;
    border-radius: 20px;
    background-color: #9b75ec;
    font-size: 15px;
    font-weight: 550;
  }
  .creation-card {
    margin-top: 15px;
    color: black;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    padding-left: 31px;
  }
  .create-card {
    margin-bottom: 10px;
  }
.text-field{
  // display:flex;
  // flex-direction:column;
  // justify-content:start;
}
  .view-btn {
    /* display: */
    width: 300px;
    height: 35px;
    background-color: #591ddd;
    color: white;
    font-weight: 600;
    border: none;
    border-radius: 8px;
  }
  .view-details-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 22px;
  }
  
`;
