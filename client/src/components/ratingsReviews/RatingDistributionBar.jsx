import React from 'react';
import PropTypes from 'prop-types';

function RatingDistributionBar({ reviewCount, totalReviewCount }) {
  return (
    <div
      className="distribution-background"
      style={{ height: '100%', backgroundColor: '#707070' }}
    >
      <div
        className="distribution-foreground"
        style={{
          width: `${(reviewCount / totalReviewCount) * 100}%`,
          height: '100%',
          backgroundColor: '#73B98C',
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
