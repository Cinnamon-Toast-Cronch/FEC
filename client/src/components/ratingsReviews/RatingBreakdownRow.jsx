import React from 'react';
import PropTypes from 'prop-types';
import RatingDistributionBar from './RatingDistributionBar.jsx';

function RatingBreakdownRow({ rating, ratingCount, totalRatingCount }) {
  return (
    <div className="rating-breakdown-row">
      <p>{`${rating} stars`}</p>
      <RatingDistributionBar
        reviewCount={ratingCount}
        totalReviewCount={totalRatingCount}
      />
      <p>{ratingCount}</p>
    </div>
  );
}

export default RatingBreakdownRow;
