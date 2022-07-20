import styled from 'styled-components';
import {device} from "../../styles/Breakpoints";

type StyledListProps = {
    isOpen: boolean;
};

export const Wrapper = styled.div`
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 400;
  background: ${({theme}) => theme.elementsBackground};
  box-shadow: ${({theme}) => theme.elementsShadow};
  padding: 1.4rem 2rem;
  @media ${device.mobile} {
    padding: 1.8rem 2rem;
    
  }
`;
export const Select = styled.select`
  background: ${({theme}) => theme.elementsBackground};
  color: ${({theme}) => theme.textColor};
  border: none;
  outline: none;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin-right: 50px;
  
  @media ${device.mobile} {
    font-size: 1.4rem;
  }
  :hover {
    cursor: pointer;
  }
`;
export const StyledList = styled.ul<StyledListProps>`
  padding: 0 1rem;
  margin: 0;
  margin-top: 0.3rem;
  padding: ${({ isOpen }) => (isOpen ? '1rem' : 0)};
  position: absolute;
  background: var(--color-elements);
  width: 100%;
  color: var(--color-text);
  z-index: 100;
`;

export const StyledListItem = styled.li`
  font-size: 0.75rem;
  ::not(::last-child) {
    margin-bottom: 0.5rem;
  }
  :hover {
    cursor: pointer;
  }
  @media (min-width: 42.375rem) {
    font-size: 0.875rem;
  }
`;