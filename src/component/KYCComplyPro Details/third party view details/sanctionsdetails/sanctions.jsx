import React from "react";

function SanctionsDetails() {
  return (
    <div className="Third-View-Main-Section">
      {" "}
      <div className="Third-Header-Section">
        <h1 className="Third-View-Title">Third Party</h1>

        <span className="Third-View-Text">
          <RiArrowGoBackFill className="Back-logo" />
          Back
        </span>
      </div>
      <div className="Third-View-Container">
        {" "}
        <div className="General-Info-Section">
          <span className="General-Info-Title">Sanctions</span>
          <img className="img" src={i} alt="" />
        </div>
        <div className="GeneralSection">
          <table className="General-Table-Section">
            <tr className="General-Top-Section">
              <th className="General-title">
                <LuArrowDownUp className="Arrow-Logo" />
                Title
              </th>
              <th className="General-title1">
                <LuArrowDownUp className="Arrow-Logo" />
                Source
              </th>
            </tr>
            <tr className="General-Bottom-Section">
              <td className="General-bottom-title">
                ВЕЛЕЖАНІН А. О.,VELEZHANIN AO,Вележанін А. О.,ВЕЛЕЖАНИН А. О.
              </td>
              <td className="General-bottom-title2">
                Global Sanctions Database
              </td>
            </tr>
            <tr className="General-Top-Section">
              <td className="General-title">
                ЛОБАНОВСЬКИЙ Дмитро А.,Лобановський Дмитро А.,LOBANOVSKY Dmitry
                A.,ЛОБАНОВСКИЙ Дмитрий А.
              </td>
              <td className="General-title3">Global Sanctions Database</td>
            </tr>
            <tr className="General-Bottom-Section">
              <td className="General-bottom-title">
                НЕРЮПОВ Александр А.,NERYUPOV Alexander A.,Нерюпов Олександр
                А.,НЕРЮПОВ Олександр А.
              </td>
              <td className="General-bottom-title4">
                Global Sanctions Database
              </td>
            </tr>
          </table>
        </div>
        <div class="button-container">
          <button className="Previous-Button">Previous</button>
          <button className="Number-Button">1</button>
          <button className="Number-Button">2</button>

          <button className="Number-Button">...</button>
          <button className="Number-Button">400</button>
          <button className="Next-Button">Next</button>
        </div>
      </div>
    </div>
  );
}

export default SanctionsDetails;
