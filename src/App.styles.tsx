import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({theme}) => theme.backgroundColor};
  color: ${({theme}) => theme.textColor};
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  max-width: 1250px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
`;