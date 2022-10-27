import React from 'react';
import { render, cleanup } from '@testing-library/react';
import StarRating from '../StarRating.jsx';

jest.mock('../StarIcon.jsx', () => ({ fillStyle, star }) => (
  <div data-testid="star-icon">{`fillStyle=${fillStyle},star=${star}`}</div>
));

afterEach(cleanup);

describe('StarRating', () => {
  it('Should contain 5 StarIcon components', () => {
    const { getAllByTestId } = render(
      <StarRating rating={3} onClick={() => {}} />
    );

    expect(getAllByTestId('star-icon').length).toBe(5);
  });

  it('Should round the fillStyle to the nearest quarter', () => {
    const ratingFillStylePairs = [
      { rating: 0.1, fillStyle: 'empty' },
      { rating: 0.2, fillStyle: 'quarter' },
      { rating: 0.4, fillStyle: 'half' },
      { rating: 0.874, fillStyle: 'threeQuarters' },
      { rating: 0.999, fillStyle: 'full' },
    ];

    ratingFillStylePairs.forEach((pair) => {
      const { getByText } = render(
        <StarRating rating={pair.rating} onClick={() => {}} />
      );

      expect(
        getByText(`fillStyle=${pair.fillStyle},star=1`)
      ).toBeInTheDocument();

      cleanup();
    });
  });
});
