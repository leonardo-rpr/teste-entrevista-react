import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from './Header';

const stories = storiesOf('Components', module);

stories.add('Header', () => (
  <Header
    avatar="https://cdn.iconscout.com/icon/free/png-256/avatar-375-456327.png"
    name="Leonardo Pinheiro"
  />
));
