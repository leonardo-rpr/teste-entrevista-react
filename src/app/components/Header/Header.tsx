import React from 'react';
import { HeaderInterface } from './Header.interfaces';
import { Container } from './Header.styles';

import UserBadge from '../UserBadge';

const Header: React.FC<HeaderInterface> = ({ avatar, name }) => (
  <Container>
    <UserBadge avatar={avatar} name={name} />
  </Container>
);

Header.defaultProps = {
  name: '',
  avatar: '',
};

export default Header;
