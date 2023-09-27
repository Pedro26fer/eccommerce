import styled from "styled-components";
import { theme } from "../theme";

export const FirstListCardStyles = styled.figure`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.backGround};
    width: 100%;
    border-radius: 100%;
    height: 168px;
    
`


export const CardDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;


    h3{
        font-family: Barlow;
        font-size: 12px;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: center;

        cursor: pointer;
        
    }
    
`