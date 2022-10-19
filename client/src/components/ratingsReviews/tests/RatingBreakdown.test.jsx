/* eslint-disable react/function-component-definition */
/* eslint-disable react/display-name */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import sampleData from '../sampleData/reviewsMeta.js';
import RatingBreakdown from '../RatingBreakdown.jsx';

const ActualRatingBreakdownRow = jest.requireActual(
  '../RatingBreakdownRow.jsx'
);

jest.mock(
  '../RatingBreakdownRow.jsx',
  () =>
    ({ rating, ratingCount, totalRatingCount, addFilter }) => {
      return (
        <div data-testid="rating-breakdown-row">
          <ActualRatingBreakdownRow
            rating={rating}
            ratingCount={ratingCount}
            totalRatingCount={totalRatingCount}
            addFilter={addFilter}
          />
        </div>
      );
    }
);

afterEach(cleanup);

describe('Rating Breakdown', () => {
  it('Should contain 5 Rating Breakdown Rows. One for each rating value', () => {
    const { getAllByTestId } = render(
      <RatingBreakdown
        metadata={sampleData}
        filters={[]}
        resetFilters={() => {}}
        addFilter={() => {}}
      />
    );

    expect(getAllByTestId('rating-breakdown-row').length).toBe(5);
  });
});
