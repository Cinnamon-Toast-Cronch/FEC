import React from 'react';
import PropTypes from 'prop-types';
import StarIcon from './StarIcon.jsx';

function StarRating({ rating }) {
  const starsArray = [];
  for (let i = 0; i < 5; i += 1) {
    let fillStyle;
    if (rating >= i + 1) {
      fillStyle = 'full';
    } else if (rating >= i + 0.75) {
      fillStyle = 'threeQuarters';
    } else if (rating >= i + 0.5) {
      fillStyle = 'half';
    } else if (rating >= i + 0.25) {
      fillStyle = 'quarter';
    } else {
      fillStyle = 'empty';
    }

    starsArray[i] = <StarIcon fillStyle={fillStyle} id={i} />;
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
