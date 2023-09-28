import styled from "styled-components";
import { theme } from "../theme";

export const HeaderOneStyles = styled.div`
  width: 100%;
  height: 32px;
  background-color: ${theme.dark1};
  display: flex;
  flex-direction: row;
  font-family: Barlow;
  justify-content: space-evenly;
  gap: 12%;
  text-transform: uppercase;

  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  align-content: baseline;
  padding-top: 3px;

  h2 {
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    color: ${theme.orange1};
    line-height: 14.4px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 500;
    font-size: 10px;
    color: ${theme.gray2};

    h3 {
      line-height: 12px;
      padding-top: 5px;
      height: 14.4px;
      top: 6px;
      left: 499px;

    }

    img {
      width: 25px;
      height: 25px;
      line-height: 14.4px;
    }
  }
`;
