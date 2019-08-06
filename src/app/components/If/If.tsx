import React from 'react';
import IfInterface from './IfInterface';

const If: React.FC<IfInterface> = ({ test, children }) => (test ? children : null);

export default If;
