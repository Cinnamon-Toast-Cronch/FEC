import React from 'react';
import PropTypes from 'prop-types';

function RatingDistributionBar({ ratingCount, totalRatingCount }) {
  return (
    <div className="distribution-background">
      <div
        className="distribution-foreground"
        style={{
          width: `${(ratingCount / totalRatingCount) * 100}%`,
        }}
      />
    </div>
  );
}

RatingDistributionBar.propTypes = {
  ratingCount: PropTypes.number.isRequired,
  totalRatingCount: PropTypes.number.isRequired,
};

export default RatingDistributionBar;
