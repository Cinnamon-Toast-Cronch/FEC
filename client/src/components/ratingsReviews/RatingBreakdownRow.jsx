import React from 'react';
import PropTypes from 'prop-types';
import RatingDistributionBar from './RatingDistributionBar.jsx';

function RatingBreakdownRow({ rating, ratingCount, totalRatingCount }) {
  return (
    <div className="rating-breakdown-row">
      <p>{`${rating} stars`}</p>
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
};

export default RatingBreakdownRow;
