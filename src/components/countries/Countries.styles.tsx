
import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  gap: 2.5rem;
  @media (min-width: 42.375rem) {
    padding: 3rem 0 1rem;
    grid-template-columns: repeat(2, minmax(16.5rem, 1fr));
  }
  @media (min-width: 62.5rem) {
    grid-template-columns: repeat(3, minmax(16.5rem, 1fr));
  }
  @media (min-width: 80rem) {
    grid-template-columns: repeat(4, minmax(16.5rem, 1fr));
  }
`;