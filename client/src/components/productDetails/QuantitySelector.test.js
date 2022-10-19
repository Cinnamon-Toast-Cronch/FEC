import { render, screen, cleanup } from '@testing-library/react';
import React from 'react';
import QuantitySelector from './QuantitySelector.jsx';

// afterEach(cleanup);

describe('This will test the Quantity Selector component', () => {
  it('renders quantity component', () => {
    render(<QuantitySelector />);
    const heading = screen.getByRole('button', { name: /Quantity Form/i });
    expect(heading).toBeInTheDocument();
  });
});
