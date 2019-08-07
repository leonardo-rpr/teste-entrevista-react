import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 50px;
  background: #f2295b;
`;

export const Button = styled.button.attrs({ type: 'button' })`
  background: transparent;
  margin-right: 15px;
  cursor: pointer;
`;
