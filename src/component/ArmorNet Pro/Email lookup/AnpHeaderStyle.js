import styled from "styled-components";

export const AnpHeaderStyle = styled.div`
display: flex;
justify-content: center;
background-color: #F4F4F4;

.anp-title {
  display: flex;
  justify-content: center;
  align-items: center;
}

.anp-header-container {
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 75px;
  width: 100%;
  padding-left: 31px;
  padding-right: 150px;

}
.anp-cta {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 15px;
}

.anp-title-text {
  color: black;
  font-weight: 700;
  
}

.anp-btn {
  /* display: */
  width: 110px;
  height: 45px;
  background-color: #591ddd;
  color: white;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  font-size: 14px;
}
.anp-title-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 22px; */
}
.anp-search {
  width: 315px;
  height: 37px;
  font-size: 13px;
  border: none;
  outline: none;
  color: black;
  background-color: #EDEAF4;
}
.anp-search-box {
  display: flex;
  align-items: center;
  background-color: #EDEAF4;

  /* border: 2px #591DDD solid; */
  padding: 4px;
  border-radius: 9px;
  cursor: pointer;
}
.anp-icon {
  width: 35px;
  height: 25px;
  color: #591DDD;
}

.anp-title-img{
  display:flex;
  justify-content:center;
  align-items:center;
  width:100px;
  height:100px;
}

`;
