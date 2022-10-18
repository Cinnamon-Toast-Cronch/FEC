import React from 'react';
import PropTypes from 'prop-types';
import RatingDistributionBar from './RatingDistributionBar';

function RatingBreakdownRow() {
  return (
    <div className="rating-breakdown-row">
      <text>5 stars</text>
      <RatingDistributionBar reviewCount={5} totalReviewCount={10} />
      <text>13</text>
    </div>
  );
}

export default RatingBreakdownRow;
