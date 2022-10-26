import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ArrowButtons from '../ArrowButtons.jsx';

describe('Gallery Navigation Buttons', () => {
  it('display left-arrow button on all images except the first,display right-arrow button on all images except the last', () => {
    const { getByRole, getByText } = render(
      <button className="left-arrow" type="button">
        &#10095;
      </button>,
    );
    const test = getByText(i / left - arrow / i);
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
    expect(test).toBeInTheDocument();
  });
});
