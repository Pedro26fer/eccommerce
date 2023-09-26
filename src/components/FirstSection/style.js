import styled from "styled-components";
import { theme } from "../theme";

export const FirstSectionStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;

  
  

  width: 100%;
  min-height: 548px;

  background-image: url("/unsplash_FP7cfYPPUKM.jpg");
  background-size: cover;
  background-repeat: no-repeat;


  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 591px;
    height: 288px;
    padding-left: 100px;

    color: ${theme.white};
    font-family: Roboto Condensed;
    font-weight: 700;

    span {
      color: ${theme.orange1};
    }

    p {
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      width: 400px;
    }

    button{
        margin-top: 30px;
        width: 120px;
        height: 48px;
        background-color: ${theme.orange1};
        color: ${theme.black1};
        font-family: sans-serif;
        font-size: 16px;
        font-weight: 700;
        border-radius: 4px;
        
        :hover{
           color: ${theme.white};
        }
    }

    section{
      display: flex;
      width: 100%;
      justify-content: center;
    
      padding-top: 50px;

    }
  }
  .volteAoTopo{
    position: absolute;
    bottom: 8%;
    right: 3%;
    z-index: 999;

    cursor: pointer;
  }
  
  
  .faleConosco {
    position: absolute;
    top: 94%;
    right: 3%;
    
    cursor: pointer;
    
  }
  
  .group15{    
    position: absolute;
    bottom: 9%;
    right: 46%;
  }

  


`
