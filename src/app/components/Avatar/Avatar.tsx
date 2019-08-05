import React from 'react';
import { AvatarInterface } from './Avatar.interfaces';
import { Content } from './Avatar.styles';

const getInitialLetters = (name: string) => {
  const words = name.trim().split(' ');

  if (words.length > 1) {
    return `${words[0][0]}${words[words.length - 1][0]}`.toUpperCase();
  }

  return name.substring(0, 2).toUpperCase();
};

const Avatar: React.FC<AvatarInterface> = ({ user, size }) => (
  <Content size={size} image={user.image}>
    {!user.image && getInitialLetters(user.name)}
  </Content>
);

Avatar.defaultProps = {
  size: '50px',
};

export default Avatar;
