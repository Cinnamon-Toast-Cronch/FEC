import React from 'react';
import PropTypes from 'prop-types';
import RatingDistributionBar from './RatingDistributionBar.jsx';

function RatingBreakdownRow({
  rating,
  ratingCount,
  totalRatingCount,
  addFilter,
}) {
  return (
    <div className="rating-breakdown-row">
      <button
        type="button"
        className="text-like-button"
        onClick={() => addFilter(rating)}
      >
        {`${rating} stars`}
      </button>
      <RatingDistributionBar
        ratingCount={ratingCount}
        totalRatingCount={totalRatingCount}
      />
      <p>{ratingCount}</p>
    </div>
  );
}

RatingBreakdownRow.propTypes = {
  rating: PropTypes.string.isRequired,
  ratingCount: PropTypes.number.isRequired,
  totalRatingCount: PropTypes.number.isRequired,
  addFilter: PropTypes.func.isRequired,
};

export default RatingBreakdownRow;
