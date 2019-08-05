import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import TextField from './TextField';

storiesOf('Form', module)
  .addDecorator(withKnobs)
  .add('TextField', () => (
    <div style={{ padding: '20px' }}>
      <TextField
        label={text('Label', 'E-MAIL')}
        placeholder={text('Placeholder', 'leonardo@proenem.com')}
        value=""
        onChange={() => {}}
      />
    </div>
  ));
