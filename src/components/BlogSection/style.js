import styled from "styled-components";
import { theme } from "../theme";

export const BlogSectionStyled = styled.div`
  width: 100vw;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 44px;


  background: linear-gradient(
    180deg,
    ${theme.dark3} 0%,
    ${theme.black1} 101.48%
  );

  .headeBlog{
    width: 100%;
    gap: 51%;

  }

  div {

    display: flex;
    align-items: center;
    justify-content: center;
  

    h2 {
      padding-left: 35px;
      font-family: "Roboto Condensed";
      font-size: 32px;
      color: ${theme.white};
      text-transform:uppercase;
      span {
        color: ${theme.orange1};
      }
    }
  }

  ul {
      .arrowLeft{
        position: absolute;
        left: 4.5%;
        cursor: pointer;
      }

      position: relative;
      width: 1280px;
      display: flex;
      list-style: none;
      align-items: center;
      justify-content: center;
      gap: 3%;

    .arrowRight{
      position: absolute;
      right: 1.4%;
      cursor: pointer;
    }
  }
`;
