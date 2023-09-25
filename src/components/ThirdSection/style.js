import styled from "styled-components";
import { theme } from "../theme";


export const ThirdSectionStyled = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ul{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        list-style: none;
    }

    h3{
        font-size: 32px;
        font-style: italic;
        font-weight: 700;
        line-height: 38px;
        letter-spacing: 0em;
        text-align: center;

        color: ${theme.dark1};

    }


`