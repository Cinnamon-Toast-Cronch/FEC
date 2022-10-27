import React from 'react';
import { render, cleanup } from '@testing-library/react';
import RatingSummary from '../RatingSummary.jsx';

jest.mock('../StarRating.jsx', () => ({ rating }) => (
  <div data-testid="star-rating">{`starRating=${rating}`}</div>
));

afterEach(cleanup);

describe('RatingSummary', () => {
  it('Should display the average rating of the product', () => {
    const { getByText } = render(
      <RatingSummary ratings={{ 1: '1', 2: '1', 3: '0', 4: '1', 5: '1' }} />
    );

    expect(getByText('3.0')).toBeInTheDocument();
  });

  it('Should contain a star rating that displays the average rating of the product', () => {
    const { getByText } = render(
      <RatingSummary ratings={{ 1: '1', 2: '1', 3: '0', 4: '1', 5: '1' }} />
    );

    expect(getByText('starRating=3.0')).toBeInTheDocument();
  });

  it('Should display the total number of reviews', () => {
    const { getByText } = render(
      <RatingSummary ratings={{ 1: '1', 2: '1', 3: '0', 4: '1', 5: '1' }} />
    );

    expect(getByText('average of 4 reviews')).toBeInTheDocument();
  });
});
