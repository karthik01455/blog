import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import Card from '..';
import {mockBlogPostData } from '../../../mocks/mockData'
import makeRequests from '../../../utils/makeRequests';
// describe('Card', () => {
//     it('should render the same snapshot when it is called', () => {
//       const { asFragment } = render(<Card />);
//       expect(asFragment()).toMatchSnapshot();
//     });
//   });
jest.mock("../../../utils/makeRequests/");
jest.mock("react-router-dom", () => ({
    useNavigate: () => jest.fn(),
  }));
describe('Card', () => {
    it('should render card data when called', async () => {
        makeRequests.mockResolvedValue(mockBlogPostData);
        render(<Card />);
        await waitFor(() => {
            expect(screen.getByText("mock title 1")).toBeTruthy();
        });
    });
});