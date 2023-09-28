import styled from "styled-components";

export const BackToTopPosition = styled.div`
  img{
    width: 56px;
    height: 56px;

  }
  position: fixed;
  bottom: 8%;
  top:66%;
  left: 84.2%;
  z-index: 2;
  opacity: ${props => props.opacity ? '0.4' : '1'};

  cursor: pointer;
`;
