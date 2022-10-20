/** @jest-environment jsdom */
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Related from './relatedCarousel/relatedProducts.jsx';
import ReactDOM from 'react-dom';


// test('should render the component', () => {
//   render(<Container />);
//   const conElement = screen.getByTestId('con-1');
//   expect(conElement).toBeInTheDocument();
// });

it('should render component', () => {
  const {getByTestId} = render(<Related />);
  expect(getByTestId('con-1')).toBeInTheDocument();
})
