import React from 'react';
import { render } from '@testing-library/react';
import Header from '..';

describe('Header', () => {
  it('Should rebder header when it is rendered', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});