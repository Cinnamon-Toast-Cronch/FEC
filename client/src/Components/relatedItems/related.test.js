/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import relatedProducts from './relatedProducts.jsx';

// test('should render the component', () => {

//   render(<Container />);
//   const conElement = screen.getByTestId('con-1');
//   expect(conElement).toBeInTheDocument();
// });
afterEach(() => {
  cleanup();
});

// test('should render card component', () => {
//   render(<relatedProducts />);
//   const relatedElement = screen.getByTestId('con-1');
//   expect(relatedElement).toBeInTheDocument();
// })

it('should test', () => {
  const { getByText } = render(<relatedProducts />);
  expect(getByText(undefined).textContent.toBe(undefined))
})