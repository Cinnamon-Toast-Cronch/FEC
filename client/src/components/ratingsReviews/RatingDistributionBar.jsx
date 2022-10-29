import React from 'react';
import PropTypes from 'prop-types';

function RatingDistributionBar({ ratingCount, totalRatingCount, isHovered }) {
  const middlePointPercentage = (ratingCount / totalRatingCount) * 100;

  return (
    <div
      className="distribution-background"
      style={{
        background: `linear-gradient(90deg, ${
          isHovered ? '#1d8541' : '#73b98c'
        } ${middlePointPercentage}%, ${
          isHovered ? 'black' : '#707070'
        } ${middlePointPercentage}%)`,
      }}
    />
  );
}

RatingDistributionBar.propTypes = {
  ratingCount: PropTypes.number.isRequired,
  totalRatingCount: PropTypes.number.isRequired,
  isHovered: PropTypes.bool,
};

RatingDistributionBar.defaultProps = {
  isHovered: false,
};

export default RatingDistributionBar;
