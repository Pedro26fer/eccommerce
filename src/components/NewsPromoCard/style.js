import styled from "styled-components";
import { theme } from "../theme";

export const NewsCardStyled = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2%;

  width: 277px;
  height: 388px;

  border: 1px solid ${theme.backGround};

  img {
    cursor: pointer;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 15%;
    position: absolute;
    bottom: 80%;
    left: 80%;

    cursor: pointer;
  }

  h2 {
    display: inline-flex;
    width: 60%;
    padding-right: 20%;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 80%;

    p {
      font-size: 22px;
      font-weight: 700;
      line-height: 26px;
      letter-spacing: 0em;
      text-align: left;
      color: ${theme.orange1};
    }

    span {
      font-family: Barlow;
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: left;

      color: ${theme.dark3};
    }
  }
`;
