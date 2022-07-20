import styled from 'styled-components';
import {device} from "../../styles/Breakpoints";

export const InputWrapper = styled.div`
  position: relative;
  padding: 1.8rem 3rem;
  background: ${({theme}) => theme.elementsBackground};
  border-radius: 5px;
  box-shadow: ${({theme}) => theme.elementsShadow};
  margin-bottom: 4rem;
  @media ${device.mobile} {
    flex-grow: 1;
    max-width: 50rem;
    margin-bottom: 0;
  }
  svg {
    width: 18px;
    height: 18px; 
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    left: 2rem;
    color: ${({theme}) => theme.textColor};
  }
  input {
    width: 100%;
    padding-left: 25px;
    border-radius: 5px;
    border: none;
    font-size: 1.2rem;
    font-weight: 400;
    color: ${({theme}) => theme.textColor};
    outline: none;
    background: ${({theme}) => theme.elementsBackground};
    @media ${device.mobile} {
      font-size: 1.4rem;
    }
    ::placeholder {
      color: ${({theme}) => theme.textColor};
    }
  }
`;