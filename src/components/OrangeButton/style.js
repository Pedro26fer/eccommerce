import styled from "styled-components";
import { theme } from "../theme";

export const OrangeButtonStyled = styled.button`
  min-width: 120px;
  min-height: 40px;
  padding: 14px, 24px, 14px, 24px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 13px;
  font-weight: bold;
  font-family: Barlow;
  text-transform: uppercase;

  background-color: ${theme.orange1};
`
