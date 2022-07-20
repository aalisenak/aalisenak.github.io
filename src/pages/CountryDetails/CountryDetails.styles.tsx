import styled from "styled-components";
import {device} from "../../styles/Breakpoints";
import {Link} from "react-router-dom";

export const Wrapper = styled.main`
  padding: 0 1rem;
  max-width: 80rem;
  @media ${device.mobile} {
    margin: 0 auto;
  }
`;

export const StyledButton = styled.button`
  background-color: var(--color-elements);
  box-shadow: 0 0 0.4375rem rgba(0, 0, 0, 0.3);
  padding: 0.375rem 1.4375rem;
  border: none;
  color: var(--color-text);
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.2s linear;
  :hover {
    cursor: pointer;
    transform: translateY(-0.3125rem);
  }
`;

export const StyledLink = styled(Link)`
  background: ${({theme}) => theme.elementsBackground};
  transition: var(--transition);
  box-shadow: 0 0 0.4375rem rgba(0, 0, 0, 0.3);
  padding: 0.375rem 1.4375rem;
  border: none;
  color: var(--color-text);
  font-size: 0.875rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.2s linear;
  :hover {
    transform: translateY(-0.3125rem);
  }
`;

export const CountryWrapper = styled.article`
  margin: 4rem auto;
  max-width: 26.875rem;
  @media ${device.mobile} {
    display: flex;
    align-items: center;
    margin: 4rem 0;
    max-width: unset;
  }
`;

export const StyledCountryDetails = styled.div`
  padding-top: 2.75rem;
  color: ${({theme}) => theme.textColor};
  h1 {
    font-size: 1.375rem;
    font-weight: 800;
    margin-bottom: 1rem;
    @media ${device.mobile} {
      font-size: 2rem;
    }
  }
  h2 {
    font-size: 1rem;
  }
  @media ${device.mobile} {
    padding: 0;
    flex-basis: 50%;
  }
`;

export const Flag = styled.div`
  @media ${device.mobile} {
    height: 25rem;
    margin-right: 9rem;
    flex-basis: 50%;
  }
`;

export const CountryInfo = styled.div`
  font-size: 0.875rem;
  ul {
    padding: 0;
    margin-bottom: 2rem;
    line-height: 2;
    @media ${device.mobile} {
      margin-top: 0;
      font-size: 1rem;
    }
  }
  ul:first-child {
    @media ${device.mobile} {
      margin-right: 5rem;
    }
  }
  span,
  h3 {
    font-weight: 600;
  }
  h3 {
    font-size: 1rem;
  }
  @media ${device.mobile} {
    display: flex;
    align-items: flex-start;
  }
`;

export const BorderingCountries = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.625rem;
  padding: 0;
  margin-bottom: 0;
  font-size: 1rem;
`;