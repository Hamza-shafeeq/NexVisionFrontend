import styled from "styled-components";

export const AnpEmailLookup = styled.div`
  .card-alignment {
    display: flex;
    // justify-content: start;
    align-items: center;
    padding: 40px;
    gap: 30px;

    flex-wrap: wrap;
  }
  @media all and (max-width: 1000px) {
    .card-alignment {
      display: flex;
      // justify-content: start;
      align-items: center;
      justify-content: center;
      padding: 10px;
      gap: 20px;

      flex-wrap: wrap;
    }
  }
`;
