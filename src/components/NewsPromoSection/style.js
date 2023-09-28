import styled from "styled-components";
import { theme } from "../theme";

export const NewsPromoSectionStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100vw;


  .group15 {
    width: 140px;
  }
  
  .arrowLeft {
    position: absolute;
    top: 30%;
    left: 106%;
    z-index: 2;
  }

  .arrowRight {
    z-index: 2;
    position: absolute;
    top: 30%;
    right: 102%;
  }

  ul {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    gap: 5%;
    list-style: none;
    padding-bottom: 3%;
  }

  h1 {
    font-size: 32px;
    font-style: italic;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: center;

    color: ${theme.dark1};
  }
`;
