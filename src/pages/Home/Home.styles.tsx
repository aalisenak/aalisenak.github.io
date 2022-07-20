import styled from 'styled-components';
import {device} from "../../styles/Breakpoints";

export const SearchPanel = styled.div`
  
  @media ${device.mobile} {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    justify-content: space-between;
  }
`;

export const Wrapper = styled.main`
    padding: 2.5rem 1.6rem;

  @media ${device.mobile} {
    padding: 5rem 1.6rem;
  }
`;