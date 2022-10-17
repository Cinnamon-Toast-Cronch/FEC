import React from 'react';
import PropTypes from 'prop-types';
import StarIcon from './StarIcon';

function StarRating({ rating }) {
  const starsArray = [];
  for (let i = 0; i < 5; i += 1) {
    if (rating >= i + 1) {
      starsArray[i] = <StarIcon fillStyle="full" id={i} />;
    } else if (rating >= i + 0.5) {
      starsArray[i] = <StarIcon fillStyle="half" id={i} />;
    } else {
      starsArray[i] = <StarIcon fillStyle="empty" id={i} />;
    }
  }

  return <div>{starsArray}</div>;
}

StarRating.propTypes = {
  rating: PropTypes.number,
};

StarRating.defaultProps = {
  rating: 0,
};

export default StarRating;
