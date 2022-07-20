import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.li` 
  animation: ${appear} 1s ease;
  transition: transform 0.2s cubic-bezier(0.34, 2, 0.6, 1);
  list-style: none;
  border-radius: 5px;
  overflow: hidden;
  :hover {
    cursor: pointer;
    transform: translateY(-10px);
  }
`;

export const FlagWrapper = styled.div`
  overflow: auto;
  flex-basis: 50%;
  height: 160px;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CountryInfo = styled.div`
  background: ${({theme}) => theme.elementsBackground};
  padding: 1.5rem;
  box-shadow: ${({theme}) => theme.elementsShadow};
  flex-basis: 50%;
  h2 {
    margin-bottom: 1rem;
    font-size: 1.8rem;
    font-weight: 800;
  }
  ul {
    font-size: 1.4rem;
    padding: 0;
    list-style: none;
  }
  span {
    font-weight: 600;
  }
`;