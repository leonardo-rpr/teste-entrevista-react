import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Title from '../../../app/components/Title';

afterEach(cleanup);

describe('Title', () => {
  it('Renders at the default state correctly', () => {
    const wrapper = render(<Title title="Title" />);

    expect(wrapper).toMatchSnapshot();
  });
});
