import React from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts";
import Sidebar from "../../sidebar/sidebar";
import { RiArrowGoBackFill } from "react-icons/ri";
import { ThirdviewStyled } from "./style";

function GenderDetails() {
  const data = [
    { name: "10-20", students: 400 },
    { name: "20-30", students: 500 },
    { name: "30-40", students: 400 },
    { name: "40-50", students: 300 },
    { name: "50-60", students: 200 },
  ];

  return (
    <>
      <Sidebar>
        <ThirdviewStyled>
          <div className="Third-Header-Section">
            <h1 className="Third-View-Title">Gender/Age</h1>

            <span className="Third-View-Text">
              <RiArrowGoBackFill className="Back-logo" />
              Back
            </span>
          </div>
          <BarChart
            width={600}
            height={450}
            data={data}
            style={{ marginTop: "70px" }}
          >
            <Bar dataKey="students" fill="green" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
          </BarChart>
        </ThirdviewStyled>
      </Sidebar>
    </>
  );
}

export default GenderDetails;
