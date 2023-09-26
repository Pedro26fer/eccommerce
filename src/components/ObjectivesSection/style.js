import styled from "styled-components";
import { theme } from "../theme";
export const StyledObjectivesSection = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 90% ;
    padding-top: 2%;

    h1{
        display: inline-block;
        padding-left: 10%;
        font-size: 32px;
        font-style: italic;
        font-weight: 700;
        line-height: 38px;
        letter-spacing: 0em;
        text-transform: uppercase;


        color: ${theme.dark1};

    }

    ul{
        list-style: none;
        display: flex;
        justify-content: center;
        width: 90%;
        gap: 6%;

        
    }



`