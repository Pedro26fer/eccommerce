import styled from "styled-components";
import { theme } from "../theme";

export const ProfessionalsSectionStyled = styled.div`
  padding-bottom: 30px;
  margin-top: 5%;
  margin-bottom: 4%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;

  position: relative;
  z-index: 1;

  background-image: url("/unsplash_4aVUigDCLV8.png");
  background-color: ${theme.black1};
  background-size: cover;
  background-repeat: no-repeat;

  .backlogo {
    position: absolute;
    z-index: 1;
    right: -0.7%;
    top: 1%;
    width: 483px;
    height: 314px;
    opacity: 0.2;
  }

  .profe {
    position: relative;
    z-index: 2;
  }

  .rightArrow{
    cursor: pointer;
  }
  
  .leftArrow{
    cursor: pointer;
  }
  

  button {
    width: 8%;
    height: 9%;
    padding: 14px, 24px, 14px, 24px;
    border-radius: 4px;

    background-color: ${theme.orange1};
    position: absolute;
    top: 95%;
    right: 46%;
  }

  h1 {
    color: ${theme.white};
    padding-right: 18%;
    text-transform: uppercase;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  span {
    color: ${theme.orange1};
  }

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2%;
    list-style: none;
  }
`;
