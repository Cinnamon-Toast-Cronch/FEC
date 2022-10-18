import React from 'react';
import PropTypes from 'prop-types';

function RatingDistributionBar({ reviewCount, totalReviewCount }) {
  return (
    <div className="distribution-background">
      <div
        className="distribution-foreground"
        style={{
          width: `${(reviewCount / totalReviewCount) * 100}%`,
        }}
      />
    </div>
  );
}

RatingDistributionBar.propTypes = {
  reviewCount: PropTypes.number.isRequired,
  totalReviewCount: PropTypes.number.isRequired,
};

export default RatingDistributionBar;
