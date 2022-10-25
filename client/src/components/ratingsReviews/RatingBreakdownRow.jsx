import React from 'react';
import PropTypes from 'prop-types';
import RatingDistributionBar from './RatingDistributionBar.jsx';

function RatingBreakdownRow({
  rating,
  ratingCount,
  totalRatingCount,
  toggleFilter,
}) {
  return (
    <button
      className="rating-breakdown-row text-like-button"
      type="button"
      onClick={() => {
        toggleFilter(rating);
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
  toggleFilter: PropTypes.func.isRequired,
};

export default RatingBreakdownRow;
