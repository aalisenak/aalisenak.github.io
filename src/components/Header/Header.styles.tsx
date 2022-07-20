import styled from 'styled-components';
import {Link} from "react-router-dom";
import {device} from "../../styles/Breakpoints";


export const Wrapper = styled.header`
  background: ${({theme}) => theme.elementsBackground};
  box-shadow: ${({theme}) => theme.headerShadow};
`;

export const Content = styled.div`
  padding: 3rem 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.mobile} {
    padding: 2.5rem 1.6rem;
  }
`;

export const Title = styled(Link)`
  color: ${({theme}) => theme.textColor};
  font-weight: 800;
  font-size: 1.4rem;
  @media ${device.mobile} {
    font-size: 2.4rem;
  }
`;

export const ToggleButton = styled.button`
  font-family: 'Nunito Sans', sans-serif;
  display: flex;
  align-items: center;
  background: none;
  border: none;
  padding: 0;
  color: ${({theme}) => theme.textColor};
  svg {
    width: 1.6rem;
    height: 1.6rem;
    color: ${({theme}) => theme.textColor};
  }
  span {
    margin-left: 0.5rem;
    font-weight: 600;
    font-size: 1.2rem;
    @media ${device.mobile} {
      font-size: 1.6rem;
    }
  }
  :hover {
    cursor: pointer;
  }
`;