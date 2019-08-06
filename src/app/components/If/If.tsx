import React from 'react';
import IfInterface from './If.interfaces';

const If: React.FC<IfInterface> = ({ test, children }) => (test ? children : null);

export default If;
