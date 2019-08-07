import 'jest-styled-components';
import React from 'react';
import { render } from '@testing-library/react';
import TextField from '../../../app/components/TextField';

describe('TextField', () => {
  it('Should render correctly', () => {
    const placeholder = 'johndoe@proenem.com';
    const { container } = render(<TextField placeholder={placeholder} />);
    expect(container.firstChild.lastChild.getAttribute('placeholder')).toBe(placeholder);
    expect(container).toMatchSnapshot();
  });

  it('Should render correctly with label', () => {
    const label = 'Lorem Ipsum';
    const { container } = render(<TextField label={label} />);
    expect(container.firstChild.firstChild.textContent).toBe(label);
    expect(container).toMatchSnapshot();
  });

  it('Should render correctly with value', () => {
    const value = 'johndoe@proenem.com';
    const { container } = render(<TextField defaultValue={value} />);
    expect(container.firstChild.lastChild.getAttribute('value')).toBe(value);
    expect(container).toMatchSnapshot();
  });

  it('Should render correctly with other type', () => {
    const type = 'email';
    const { container } = render(<TextField type={type} />);
    expect(container.firstChild.lastChild.getAttribute('type')).toBe(type);
    expect(container).toMatchSnapshot();
  });
});
