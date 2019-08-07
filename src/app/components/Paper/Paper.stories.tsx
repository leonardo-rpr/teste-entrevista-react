import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Paper from './Paper';

storiesOf('Components', module).add('Paper', () => {
  const children = text('children', 'Hello world!');
  const title = text('title', 'Lorem ipsum dolor sit amet');

  return <Paper title={title}>{children}</Paper>;
});
