import styled from 'styled-components';
import { TextFieldStylesInterface } from './TextField.interfaces';

export const Field = styled.div<TextFieldStylesInterface>`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.label<TextFieldStylesInterface>`
  font-size: 14px;
  margin-bottom: 10px;
  color: ${({ error }) => (error ? '#FF0014' : '#f2295b')};
  text-transform: uppercase;
`;

export const Input = styled.input<TextFieldStylesInterface>`
  padding: 15px;
  border-radius: 4px;
  border: ${({ error }) => (error ? '1px solid #FF0014' : '1px solid #f2295b')};
  color: ${({ error }) => (error ? '#FF0014' : '#f2295b')};
  outline: none;

  ::placeholder {
    color: ${({ error }) => (error ? '#FF0014' : '#f2295b')};
    opacity: 0.4;
  }
`;

export const Error = styled.span<TextFieldStylesInterface>`
  font-size: 10px;
  margin-top: 2px;
  text-align: right;
  color: #ff0014;
`;
