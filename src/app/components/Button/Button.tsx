import React from 'react';
import Spinner from 'react-md-spinner';
import { If } from 'components';

import { StyledButton } from './Button.styles';

import { ButtonInterface } from './Button.interfaces';

const Button: React.FC<ButtonInterface> = ({ children, onClick, loading }) => (
  <StyledButton onClick={onClick}>
    <If test={loading}>
      <Spinner size={30} singleColor="#FFF" />
    </If>

    <If test={!loading}>{children}</If>
  </StyledButton>
);

export default Button;
