import styled from 'styled-components'
import { theme } from '../theme'

export const ProfessionalsSectionStyled = styled.div`

    padding-bottom:20px;
    width: 100%;
    margin-top: 5%;
    margin-bottom: 4%;

    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 1;
    


    background-image: url('/unsplash_4aVUigDCLV8.png');
    background-size: cover;
    background-repeat: no-repeat;

    .backlogo{
        position: absolute;
        z-index: 1;
        left: 80%;
        top: 1%;
    }

    .profe{
        position: relative;
        z-index: 2;
    }

    button{
        width: 8%;
        height: 9%;
        padding: 14px, 24px, 14px, 24px;
        border-radius: 4px;
        
        background-color: ${theme.orange1};
        position: absolute;
        top: 95%
    
    }


    h1{
        color: ${theme.white};
        padding-right: 28%;
        
    }


    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 50%;


        }
        span{
            color: ${theme.orange1};
        }

        ul{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 22%;
            list-style: none;

        }
    

 


`