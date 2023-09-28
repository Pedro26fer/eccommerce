import styled from "styled-components";
import { theme } from "../theme";

export const BackGroundInfo = styled.div`
  width: 100vw;
  min-height: 588px;
  background-color: ${theme.black1};
  padding: 5%;
  padding-top: 0;
  padding-bottom: 0;

  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  gap: 3%;

  main {

    div{
      padding-top: 8.3%;

    }
    
    max-width:51%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 9%;
    border-right: 1px solid ${theme.gray1};

    li{
      cursor: pointer;
    }

    .paymentDiv{
      width: 207px;
    }

    .paymentList {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      

      gap: 3%;
      width: 100%;
      padding-bottom: 15%;
      padding-top: 2%;

      .amex{
        background-color: #0f71ff;
      }

      div{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        border-radius: 10%;
        width: 34px;
        height: 24px;
        margin-bottom: 27%;
        

      }
    }

    .security {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      
      div {
        flex-direction: row;
        gap: 6%;
        padding-top: 9%;
      }
    }



    div h1{
      
      display: inline-flex;
      padding: 0;

    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    h1 {
      font-family: Barlow;
      font-size: 16px;
      font-weight: 700;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
      color: ${theme.white};
      padding-top: 18%;
      padding-bottom: 18%;
    }

    ul {
      padding: 0;
      list-style: none;
      font-family: Barlow;
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: left;
      color: ${theme.gray1};
      line-height: 3;
    }
  }

  header {
    flex-direction: column;
    text-align: center;
    width: 16%;
    .Logo{
      padding-bottom: 20%;
      padding-top: 20%;
    }

    

    h2 {
      color: ${theme.white};
      font-family: Barlow;
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: center;
    }

    ul {
      display: flex;
      list-style: none;
      justify-content: center;
      gap: 8%;
      padding-left: 3%;
      li{
        background-color: white;
        border-radius: 100%;
        padding: 1.3%;
        cursor: pointer;
      }
    }
  }

  footer {
    display: flex;
    flex-direction: column;
    padding-top: 3%;

    max-width: 18%;

    h1 {
      display: block;
      width: 50%;
      padding-left: 17%;
      font-family: Roboto Condensed;
      font-size: 32px;
      font-style: italic;
      font-weight: 700;
      line-height: 38px;
      letter-spacing: 0em;
      text-align: center;
      color: ${theme.white};
      span {
        color: ${theme.orange1};
      }
    }

    h2 {
      font-family: Barlow;
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: center;
      padding-bottom: 3%;
      color: ${theme.gray1};
    }

    div {
      min-width: 100%;
      height: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 13%;

      input {
        width: 100%;
        height: 28%;
        border-radius: 4px;
        border: 1px solid ${theme.dark3};
        background-color: ${theme.dark1};
        gap: 10px;

        &::placeholder {
          font-family: Barlow;
          padding-left: 5%;
        }
      }

      button {
        width: 50%;
      }
    }
  }
`;
