import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RatingDistributionBar from './RatingDistributionBar.jsx';

function RatingBreakdownRow({
  rating,
  ratingCount,
  totalRatingCount,
  toggleFilter,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="rating-breakdown-row text-like-button"
      type="button"
      onClick={() => {
        toggleFilter(rating);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p>{`${rating} stars`}</p>
      <RatingDistributionBar
        ratingCount={ratingCount}
        totalRatingCount={totalRatingCount}
        isHovered={isHovered}
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
