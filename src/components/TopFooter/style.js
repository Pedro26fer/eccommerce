import styled from "styled-components";
import { theme } from "../theme";

export const TopFooterStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 3%;
  padding-bottom: 5%;
  gap: 2%;

  div {
    background: linear-gradient(
      213.8deg,
      ${theme.gray1} -17.86%,
      ${theme.black1} 73%
    );
    width: 27vw;
    height: 33vh;
    padding: 1%;
    padding-left: 4%;

    h3 {
      width: 48%;
      font-size: 40px;
      font-style: italic;
      font-weight: 700;
      line-height: 47px;
      letter-spacing: 0em;
      text-align: left;
      color: ${theme.white};
      span {
        color: ${theme.orange1};
      }
    }

    .cubic {
      position: absolute;
      top: 30%;
      left: 35%;
    }

    .dollar {
      position: absolute;
      top: 30%;
      left: 69%;
    }
  }
`;
