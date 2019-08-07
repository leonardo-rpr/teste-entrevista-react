import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Badge from '../../../app/components/Badge';

afterEach(cleanup);

describe('Badge', () => {
  it('Renders at the default state correctly', () => {
    const wrapper = render(<Badge label="Badge" />);

    expect(wrapper).toMatchSnapshot();
  });
});
