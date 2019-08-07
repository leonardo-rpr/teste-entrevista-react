import styled from 'styled-components';
import { ButtonStylesInterface } from './Button.interfaces';

export const StyledButton = styled.button<ButtonStylesInterface>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  height: 48px;
  padding: 5px 20px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  outline: none;
  cursor: pointer;
  width: 100%;
  color: #ffffff;
  background: linear-gradient(to right, #f2295b 0%, #5a2b78 100%);
`;
