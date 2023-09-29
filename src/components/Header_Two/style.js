import styled from "styled-components";
import { theme } from "../theme";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";

export const HeaderTwoStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 100px;
  padding-right: 100px;

  align-items: center;

  height: 72px;
  max-width: 100vw;
  background-color: ${theme.black1};

  ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    text-transform: uppercase;

    gap: 2%;

    color: ${theme.gray2};
    list-style: none;

    font-family: Barlow;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;

    :hover {
      cursor: pointer;
      color: ${theme.white};
    }
  }

  section {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 19%;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-right: 5px;

      width: 80%;
      height: 40px;
      border: 1px solid ${theme.gray1};
      border-radius: 5px;
      background-color: ${theme.dark3};

      input {
        background-color: ${theme.dark3};
        border: none;
        outline: none;
        caret-color: ${theme.gray1};
        color: ${theme.white};
        width: 216px;
        

        &::placeholder {
          color: ${theme.gray1};
          font-weight: bold;
          font-family: Barlow;
          padding: 0px 5px 0px 5px;
        }
      }
    }

    .menu {
      width: 15%;
      gap: 30%;

      li{
        position: relative;
        z-index: 1
      }

      .counterProducts{
        position: absolute;
        z-index: 2;
        bottom: 55%;
        left: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 16px;
        height: 16px;

        border-radius: 100%;
        background-color: ${theme.orange1};
        color: ${theme.black1};

        font-family: Barlow;
        font-size: 10px;
        font-weight: 700;
        line-height: 12px;
        letter-spacing: 0em;
        text-align: center;


      }
    }
  }
`;

export const StyleCartIcon = styled(AiOutlineShoppingCart)`
  width: 24px;
  height: 21px;
  color: ${theme.gray1};
`;

export const StyledUserIcon = styled(BiUserCircle)`
  width: 24px;
  height: 24px;
  color: ${theme.gray1};
`;

export const StyledStarIcon = styled(AiOutlineStar)`
  width: 24px;
  height: 24px;
  color: ${theme.gray1};
`;
