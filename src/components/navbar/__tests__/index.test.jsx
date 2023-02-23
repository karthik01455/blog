import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Navbar from '../../navbar';
jest.mock("../../../utils/makeRequests/");
jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));
describe('Navbar', () => {
  it('should render the same snapshot when it is called', () => {
    const { asFragment } = render(<Navbar />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should navigate to blog page when clicked on contact', () => {
    const navigate = jest.fn();
    const { queryByTestId } = render(<Navbar />);
    const contact = queryByTestId('Contact');
    fireEvent.click(contact);
    // expect(navigate).toHaveBeenCalled(1);
    expect(navigate).toHaveBeenCalledWith('/home/blog');

  });
  it('should navigate to about page when clicked on about', () => {
    const navigate = jest.fn();
    const { queryByText } = render(<Navbar />);
    const about = queryByText('About')
    fireEvent.click(about);
    //expect(navigate).toHaveBeenCalledWith('/home/about');

  });
});
