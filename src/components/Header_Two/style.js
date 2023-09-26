import styled from "styled-components";
import { theme } from "../theme";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {BiUserCircle} from 'react-icons/bi'
import {AiOutlineStar} from 'react-icons/ai'

export const HeaderTwoStyled = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;


    align-items: center;
    
    height: 72px;
    max-width: 100vw;
    background-color: ${theme.black1};

    ul {
       
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        
        gap: 2%;

        color: ${theme.gray2};
        list-style: none;

        font-family: Barlow;
        font-size: 14px;
        font-weight: 700;

        :hover{
            cursor: pointer;
            color: ${theme.white};
        }

    }

    section{

        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 19%;

        div {
            display: flex;
            align-items: center;
            justify-content: center;
    
            width: 80%;
            height: 40px;
            border: 1px solid ${theme.gray1};
            border-radius: 5px;
            background-color: ${theme.dark3} ;
    
            input{
            
                background-color: ${theme.dark3};
                border: none;
                outline: none;
                caret-color: ${theme.gray1};
                color: ${theme.white};
    
                &::placeholder {
                    color: ${theme.gray1};
                    font-weight: bold;
                    font-family: Barlow;
                }
            }
    
            
        }
        
        .menu{

            width: 15%;
            gap: 50%;
        }

    }


`

export const StyleCartIcon = styled(AiOutlineShoppingCart)`
    width: 24px;
    height: 21px;
    color: ${theme.gray1};
    
    `

export const StyledUserIcon = styled(BiUserCircle)`
    width: 24px;
    height: 24px;
    color: ${theme.gray1};
    `

export const StyledStarIcon = styled(AiOutlineStar)`
    width: 24px;
    height: 24px;
    color: ${theme.gray1};
`