import React from 'react';
import PropTypes from 'prop-types';
import FullStar from '../../assets/images/starIcons/star.svg';
import HalfStar from '../../assets/images/starIcons/star-half.svg';
import EmptyStar from '../../assets/images/starIcons/star-outline.svg';

function StarRating({ rating }) {
  const starIcons = {
    full: (
      <img
        src={FullStar}
        height="20px"
        width="20px"
        alt="Star that is completely filled"
      />
    ),
    half: (
      <img
        src={HalfStar}
        height="20px"
        width="20px"
        alt="Star that is half filled"
      />
    ),
    empty: (
      <img
        src={EmptyStar}
        height="20px"
        width="20px"
        alt="Star that is half filled"
      />
    ),
  };

  const starsArray = [];
  for (let i = 0; i < 5; i += 1) {
    if (rating >= i + 1) {
      starsArray[i] = starIcons.full;
    } else if (rating >= i + 0.5) {
      starsArray[i] = starIcons.half;
    } else {
      starsArray[i] = starIcons.empty;
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
