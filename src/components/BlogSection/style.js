import styled from "styled-components";
import { theme } from "../theme";

export const BlogSectionStyled = styled.div`
    width: 100%;
    margin-top :5% ;
    box-sizing: border-box;
    padding: 1%;

    background: linear-gradient(180deg, ${theme.dark3} 0%, ${theme.black1} 101.48%);



    div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap:59%;
        

        h2{
            font-family: 'Roboto Condensed';
            font-size: 32px;
            color: ${theme.white};
            span{
                color: ${theme.orange1};
            }
        }

        
    }

    ul{
        display: flex;
        list-style: none;
        width: 90%;
        align-items: center;
        justify-content: center;
        gap: 8%;
        padding-left: 5%;
    }
    
`