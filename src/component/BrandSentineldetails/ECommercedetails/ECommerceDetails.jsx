import React from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts";
import Sidebar from "../../sidebar/sidebar";
import { RiArrowGoBackFill } from "react-icons/ri";
import { ThirdviewStyled } from "./style";

function ECommerceDetails() {
  const data = [
    { name: "Excellent", students: 500 },
    { name: "Good", students: 300 },
    { name: "Average", students: 100 },
    { name: "Fair", students: 50 },
    { name: "Poor", students: 30 },
  ];

  return (
    <>
      <Sidebar>
        <ThirdviewStyled>
          <div className="Third-Header-Section">
            <h1 className="Third-View-Title">E-Commerce</h1>

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

export default ECommerceDetails;
