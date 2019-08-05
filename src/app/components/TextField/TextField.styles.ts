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
  color: #f58843;
  text-transform: uppercase;
`;

export const Input = styled.input<TextFieldStylesInterface>`
  padding: 15px;
  border-radius: 4px;
  border: 1px solid #f58843;
  color: #f58843;
  outline: none;

  ::placeholder {
    color: #f58843;
    opacity: 0.4;
  }
`;
