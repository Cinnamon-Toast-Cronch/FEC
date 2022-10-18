import React from 'react';
import PropTypes from 'prop-types';
import RatingDistributionBar from './RatingDistributionBar.jsx';

function RatingBreakdownRow() {
  return (
    <div className="rating-breakdown-row">
      <p>5 stars</p>
      <RatingDistributionBar reviewCount={5} totalReviewCount={10} />
      <p>13</p>
    </div>
  );
}

export default RatingBreakdownRow;
