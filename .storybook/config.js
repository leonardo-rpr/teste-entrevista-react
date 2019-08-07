import { configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator } from '@storybook/react';

addDecorator(withKnobs);

const req = require.context('../src/app/components', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
