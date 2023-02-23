import React from 'react';
import { render } from '@testing-library/react';
import Footer from '..';

describe('Footer', () => {
    it('should render the same snapshot when it is called', () => {
      const { asFragment } = render(<Footer />);
      expect(asFragment()).toMatchSnapshot();
    });
  });