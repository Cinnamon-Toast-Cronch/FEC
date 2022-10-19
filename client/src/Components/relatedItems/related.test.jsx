/** @jest-environment jsdom */
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Container from './container.jsx';

test('should render the component', () => {
  render(<Container />);
  const conElement = screen.getByTestId('con-1');
  expect(conElement).toBeInTheDocument();
});
