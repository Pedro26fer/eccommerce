import styled from "styled-components";
import { theme } from "../theme";
export const StyledPreviaBlogCard = styled.div`
    
    display: flex;
    flex-direction: column;



    background-color: ${theme.dark3};
    width: 376px;
    border: 0.2px solid ${theme.gray2};

    color: ${theme.white};

    figure{
        width:"376px";
        height:"200px";
        margin-top: 0;
        color: ${theme.gray1};

        

        figcaption{
            padding-left: 5%;
        }
    }

    p{
        display: inline-flex;
        padding-right: 8%;
        width: 80%;
        padding-bottom: 8%;


        font-family: Barlow;
        font-size: 18px;
        font-weight: 700;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
    }

    button{
        margin-right: 60%;
        margin-bottom: 5%;
    }

    

`