import React from 'react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Avatar from './Avatar';

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .add('Avatar', () => (
    <Avatar
      size="100px"
      user={{
        name: text('name', 'Leonardo'),
        image: boolean('with image', false)
          ? 'https://cdn.dribbble.com/users/588874/screenshots/2291915/dribbble.png'
          : '',
      }}
    />
  ));
