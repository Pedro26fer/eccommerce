import styled from "styled-components";
import { theme } from "../theme";

export const NewsPromoSectionStyled = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100vw;

  .arrow {
    position: absolute;
    top: 50%;
    right: 90%;
    z-index: 2;
  }

  .arrow_two {
    position: absolute;
    top: 50%;
    left: 92.5%;
  }

  ul {
    display: flex;
    justify-content: center;
    gap: 8%;
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
