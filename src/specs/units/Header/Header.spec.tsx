import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from '../../../app/components/Header';

afterEach(cleanup);

describe('Header', () => {
  it('Renders at the default state correctly', () => {
    const wrapper = render(<Header onClick={jest.fn()} />);

    expect(wrapper).toMatchSnapshot();
  });
});
