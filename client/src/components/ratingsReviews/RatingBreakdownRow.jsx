import React from 'react';
import PropTypes from 'prop-types';
import RatingDistributionBar from './RatingDistributionBar.jsx';

// TODO: The filters will be toggled on and off with each click.
// Clicking a second time on a rating breakdown will remove the filter
// for that rating type. If this action removes the last or only filter,
// then the list should return to its default state and all reviews should be shown.

function RatingBreakdownRow({
  rating,
  ratingCount,
  totalRatingCount,
  addFilter,
}) {
  return (
    <button
      className="rating-breakdown-row text-like-button"
      type="button"
      onClick={() => {
        addFilter(rating);
      }}
    >
      <p>{`${rating} stars`}</p>
      <RatingDistributionBar
        ratingCount={ratingCount}
        totalRatingCount={totalRatingCount}
      />
      <p>{ratingCount}</p>
    </button>
  );
}

RatingBreakdownRow.propTypes = {
  rating: PropTypes.string.isRequired,
  ratingCount: PropTypes.number.isRequired,
  totalRatingCount: PropTypes.number.isRequired,
  addFilter: PropTypes.func.isRequired,
};

export default RatingBreakdownRow;
