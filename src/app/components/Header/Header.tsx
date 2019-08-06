import React from 'react';
import { HeaderInterface } from './Header.interfaces';
import { Container } from './Header.styles';

const Header: React.FC<HeaderInterface> = ({ onClick }) => <Container />;

export default Header;
