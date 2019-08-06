import React from 'react';
import { StyledTitle } from './Title.styles';
import TitleInterface from './Title.interfaces';

const Title: React.FC<TitleInterface> = ({ title }) => <StyledTitle>{title}</StyledTitle>;

export default Title;
