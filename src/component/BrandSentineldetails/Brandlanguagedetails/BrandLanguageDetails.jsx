import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import Sidebar from "../../sidebar/sidebar";
import { RiArrowGoBackFill } from "react-icons/ri";
import { ThirdviewStyled } from "./style";
function BrandLanguageDetails() {
  const data = {
    labels: [
      "English",
      "Thai",
      "Spanish",
      "Indonesian",
      "Japanese",
      "French",
      "German",
      "Turkish",
      "Italian",
      "Portuguese",
    ],
    datasets: [
      {
        data: [61.5, 7.7, 30.8, 61.5, 7.7, 30.8, 30.8, 61.5, 7.7, 30.8],
        backgroundColor: [
          "#4c9f70", // Twitter.com
          "#ff6961", // Insta.com
          "#6a5d7b", // Youtube.com
          "#ffcc5c", // Tiktok.com
          "#88a2aa", // Telegram.org
          "#c23b22", // Facebook.com
          "#779ecb", // rss.com
          "#ff6961", // Instagram.com
          "#aec6cf", // Linkedin.com
          "#6a5d7b", // Snapchat.com
        ],
        borderColor: ["#ffffff"],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        labels: {
          boxWidth: 10,
          usePointStyle: true,
        },
      },
      title: {
        display: false,
      },
    },
  };

  const containerStyle = {
    width: "300px",
    height: "300px",
    position: "relative",
    margin: "0 auto",
  };

  return (
    <>
      <Sidebar>
        <ThirdviewStyled>
          <div className="Third-Header-Section">
            <h1 className="Third-View-Title">Language</h1>

            <span className="Third-View-Text">
              <RiArrowGoBackFill className="Back-logo" />
              Back
            </span>
          </div>
          <div style={containerStyle}>
            <Pie data={data} options={options} />
          </div>
        </ThirdviewStyled>
      </Sidebar>
    </>
  );
}

export default BrandLanguageDetails;
