import React from 'react';
import PropTypes from 'prop-types';
import FullStar from '../../assets/images/starIcons/star.svg';
import HalfStar from '../../assets/images/starIcons/star-half.svg';
import EmptyStar from '../../assets/images/starIcons/star-outline.svg';

function StarIcon({ fillStyle, id }) {
  const iconAltTexts = {
    full: 'Rating star icon that is completely filled',
    half: 'Rating star icon that is half filled',
    empty: 'Rating star icon that is empty',
  };

  const iconImages = {
    full: FullStar,
    half: HalfStar,
    empty: EmptyStar,
  };

  return (
    <img
      src={iconImages[fillStyle]}
      key={id}
      width="20px"
      height="20px"
      alt={iconAltTexts[fillStyle]}
    />
  );
}

StarIcon.propTypes = {
  fillStyle: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default StarIcon;
