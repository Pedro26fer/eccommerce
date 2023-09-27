import styled from "styled-components";
import { theme } from "../theme";

export const FooterStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 48%;

  background-color: ${theme.black1};
  width: 100vw;
  height: 88px;
  top: 500px;
  border-top: 1px solid ${theme.gray1};

  h2 {
    font-family: Barlow;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: ${theme.white};
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 12%;
  }
`;
