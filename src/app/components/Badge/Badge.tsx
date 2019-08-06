import React from 'react';
import { StyledBadge } from './Badge.styles';
import BadgeInterface from './Badge.interfaces';

const Badge: React.FC<BadgeInterface> = ({ label }) => <StyledBadge>{label}</StyledBadge>;

export default Badge;
