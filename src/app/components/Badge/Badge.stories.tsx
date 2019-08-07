import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Badge from './Badge';

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .add('Badge', () => (
    <div style={{ width: 80 }}>
      <Badge label={text('Label', 'Teste')} />
    </div>
  ));
