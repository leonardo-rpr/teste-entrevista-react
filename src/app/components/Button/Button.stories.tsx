import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .add('Button', () => (
    <div style={{ padding: '20px' }}>
      <Button>{text('Text', 'login')}</Button>
    </div>
  ));
