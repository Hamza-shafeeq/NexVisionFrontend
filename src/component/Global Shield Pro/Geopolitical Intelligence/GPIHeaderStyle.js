import styled from "styled-components";

export const GPIHeaderStyle = styled.div`
display: flex;
justify-content: center;
background-color: #F4F4F4;

.gpi-title {
  display: flex;
  justify-content: center;
  align-items: center;
}

.gpi-header-container {
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 75px;
  width: 100%;
  padding-left: 31px;
  padding-right: 150px;

}
.gpi-cta {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 15px;
}

.gpi-title-text {
  color: black;
  font-weight: 700;
  
}

.gpi-btn {
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
.gpi-title-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 22px; */
}
.gpi-search {
  width: 315px;
  height: 37px;
  font-size: 13px;
  border: none;
  outline: none;
  color: black;
  background-color: #EDEAF4;
}
.gpi-search-box {
  display: flex;
  align-items: center;
  background-color: #EDEAF4;

  /* border: 2px #591DDD solid; */
  padding: 4px;
  border-radius: 9px;
  cursor: pointer;
}
.gpi-icon {
  width: 35px;
  height: 25px;
  color: #591DDD;
}

.gpi-title-img{
  display:flex;
  justify-content:center;
  align-items:center;
  width:100px;
  height:100px;
}


@media all and (max-width: 1000px) {
  .gpi-header-container {
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0px;
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
  .gpi-cta {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 6px;
  }
  .gpi-title-text {
    color: black;
    font-size: 15px;
    font-weight: 600;
  }
  .gpi-title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
  }
  .gpi-title-img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 72px;
  }
  .gpi-cta {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 8px;
  }
  .gpi-btn {
    width: 92px;
    height: 38px;
    background-color: #591ddd;
    color: white;
    font-weight: 500;
    border: none;
    border-radius: 8px;
    font-size: 14px;
  }
  .gpi-search {
    width: 184px;
    height: 37px;
    font-size: 13px;
    border: none;
    outline: none;
    color: black;
    background-color: #edeaf4;
  }
}
@media all and (max-width: 750px) {
  .gpi-header-container {
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0px;
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
  .gpi-title-text {
    color: black;
    font-size: 15px;
    font-weight: 600;
  }
  .gpi-title-img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
  }
  .gpi-cta {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 6px;
  }
  .gpi-btn {
    width: 80px;
    height: 40px;
    background-color: #591ddd;
    color: white;
    font-weight: 500;
    border: none;
    border-radius: 8px;
    font-size: 14px;
  }
  .gpi-search {
    width: 115px;
    height: 37px;
    font-size: 13px;
    border: none;
    outline: none;
    color: black;
    background-color: #edeaf4;
  }
}



`;
