import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';

import { Container, Button } from './Header.styles';
import { HeaderInterface } from './Header.interfaces';

const Header: React.FC<HeaderInterface> = ({ onClick }) => (
  <Container>
    <Button onClick={onClick}>
      <FaSignOutAlt size="20px" color="#FFF" />
    </Button>
  </Container>
);

export default Header;
