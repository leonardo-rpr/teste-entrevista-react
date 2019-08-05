import React from 'react';
import { StyledButton } from './Button.styles';

const Button: React.FC<{}> = ({ children }) => <StyledButton>{children}</StyledButton>;

export default Button;
