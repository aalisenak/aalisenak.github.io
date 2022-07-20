import styled from "styled-components";

export const Notification = styled.p`
  text-align: center;
  font-size: 3rem;
  margin-top: 100px;
  color: ${({theme}) => theme.textColor};
`;