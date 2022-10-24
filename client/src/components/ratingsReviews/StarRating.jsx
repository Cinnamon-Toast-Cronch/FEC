import React from 'react';
import PropTypes from 'prop-types';
import StarIcon from './StarIcon.jsx';

function StarRating({ rating, onClick }) {
  const starsArray = [];
  for (let i = 0; i < 5; i += 1) {
    let fillStyle;
    if (rating > i + 0.875) {
      fillStyle = 'full';
    } else if (rating > i + 0.625) {
      fillStyle = 'threeQuarters';
    } else if (rating > i + 0.375) {
      fillStyle = 'half';
    } else if (rating > i + 0.125) {
      fillStyle = 'quarter';
    } else {
      fillStyle = 'empty';
    }

    starsArray[i] = (
      <StarIcon fillStyle={fillStyle} key={i} star={i + 1} onClick={onClick} />
    );
  }

  return <div>{starsArray}</div>;
}

StarRating.propTypes = {
  rating: PropTypes.number,
  onClick: PropTypes.func,
};

StarRating.defaultProps = {
  rating: 0,
  onClick: undefined,
};

export default StarRating;
