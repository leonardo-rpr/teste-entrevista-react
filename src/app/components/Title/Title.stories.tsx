import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Title from './Title';

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .add('Title', () => (
    <div style={{ padding: '20px' }}>
      <Title title={text('Label', 'Teste')} />
    </div>
  ));
