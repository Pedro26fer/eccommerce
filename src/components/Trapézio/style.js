import styled from "styled-components";
import { theme } from "../theme";

export const StyledTrapezio = styled.div`
  width: 190px;
  height: 0;
  border-right: 20px solid transparent;
  border-top: 40px solid ${theme.orange1};

  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  h2 {
    display: inline-block;
    padding-left: 4%;
    font-family: Barlow;
    font-style: italic;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: ${theme.black1};
  }
`;
