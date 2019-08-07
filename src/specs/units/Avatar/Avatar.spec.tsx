import React from 'react';
import { render } from '@testing-library/react';
import Avatar from '../../../app/components/Avatar';
import 'jest-styled-components';

describe('Avatar', () => {
  it('Should render correctly without image', () => {
    const user = {
      name: 'Lorem Ipsum',
    };

    const { container } = render(<Avatar user={user} />);
    expect(container.firstChild.textContent).toBe('LI');
    expect(container.firstChild).not.toHaveStyleRule('background-size', 'cover');
    expect(container).toMatchSnapshot();
  });

  it('Should render correctly with single name', () => {
    const user = {
      name: 'Lorem',
    };

    const { container } = render(<Avatar user={user} />);
    expect(container.firstChild.textContent).toBe('LO');
    expect(container).toMatchSnapshot();
  });

  it('Should render correctly with space after name', () => {
    const user = {
      name: 'Lorem ',
    };

    const { container } = render(<Avatar user={user} />);
    expect(container.firstChild.textContent).toBe('LO');
    expect(container).toMatchSnapshot();
  });

  it('Should render correctly with more than two names', () => {
    const user = {
      name: 'Lorem Ipsum dolor',
    };

    const { container } = render(<Avatar user={user} />);
    expect(container.firstChild.textContent).toBe('LD');
    expect(container).toMatchSnapshot();
  });

  it('Should render correctly with image', () => {
    const user = {
      name: 'Lorem Ipsum',
      image: '//img.jpg',
    };

    const { container } = render(<Avatar user={user} />);
    expect(container.firstChild.textContent).toBe('');
    expect(container.firstChild).toHaveStyleRule(
      'background',
      `url(${user.image}) center center no-repeat`,
    );
  });
});
