import styled from "styled-components";

export const SecondSectionStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  width: 100%;
  
  ul {
    width: 90%;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    list-style: none;
    gap: 7%;
  }

  .arrow_two{
    position: absolute;
    left: 93%;
  }
  
  
  .arrow{
    position: absolute;
    right: 90%;
    z-index: 2;
  }
  

`;
