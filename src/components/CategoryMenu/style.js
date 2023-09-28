import styled from "styled-components";


export const CategoryMenuStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding-top: 20px;
  z-index: 1;
  
  .arrowLeft{
    position: absolute;
    z-index: 2;
    top: 30%;
    right: 98.3%;
    cursor: pointer;

  }

  .arrowRight{
    position: absolute;
    z-index: 2;
    top: 30%;
    left: 102%;
    cursor: pointer;
  }
  
  ul {
    position: relative;
    width: 1190px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2.3%;
    list-style: none;
    z-index: 1;

    padding-bottom: 3%;
  }
`;
