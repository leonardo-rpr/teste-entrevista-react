import React from 'react';
import { render } from '@testing-library/react';
import Button from '../../../app/components/Button';
import 'jest-styled-components';

describe('Button', () => {
  it('Should render correctly', () => {
    const { container } = render(<Button onClick={jest.fn()}>Login</Button>);
    expect(container).toMatchSnapshot();
  });
});
