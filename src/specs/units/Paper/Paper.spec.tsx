import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Paper from '../../../app/components/Paper';

afterEach(cleanup);

describe('Paper', () => {
  it('Renders at the default state correctly', () => {
    const wrapper = render(<Paper />);

    expect(wrapper).toMatchSnapshot();
  });

  it('Renders at the default state with title correctly', () => {
    const wrapper = render(<Paper title="Lorem ipsum dolor sit amet" />);

    expect(wrapper).toMatchSnapshot();
  });
});
