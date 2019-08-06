import React from 'react';
import { StyledButton } from './Button.styles';

import { ButtonInterface } from './Button.interfaces';

const Button: React.FC<ButtonInterface> = ({ children, onClick }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);

export default Button;
