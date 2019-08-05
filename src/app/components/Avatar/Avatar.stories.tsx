import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Avatar from './Avatar';

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .add('Avatar', () => (
    <Avatar
      size="50px"
      user={{
        name: text('name', 'Leonardo'),
        image: boolean('with image', false) ? 'https://source.unsplash.com/random?self' : '',
      }}
    />
  ));
