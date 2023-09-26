import styled from "styled-components";
import { theme } from "../theme";

export const AboutSectionStyle = styled.div`

    padding-top: 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 643px;
    height: 278px;
    position: relative;
    top: 50%;
    left: 30%;
    


    h2{

        font-family: Roboto Condensed;
        font-size: 32px;
        font-style: italic;
        font-weight: 700;
        line-height: 38px;
        letter-spacing: 0em;
        text-align: center;
        text-transform: uppercase;
        z-index: 2;

    }

    p{
        font-family: Barlow;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: center;
        color: ${theme.dark3};
        z-index: 2;
    }

    .BlackAbout{
        position: absolute;
        z-index: 1;
        bottom: 53%;
    }


`