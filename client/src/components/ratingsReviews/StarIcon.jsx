import React from 'react';
import PropTypes from 'prop-types';
import FullStar from '../../assets/images/starIcons/star.svg';
import EmptyStar from '../../assets/images/starIcons/star-outline.svg';

const ICON_SIZE = 20;
const FILL_STYLE_SETTINGS = {
  empty: {
    altText: 'Rating star that is empty',
    fillAmount: ICON_SIZE * 0,
  },
  quarter: {
    altText: 'Rating star that is twenty-five percent full',
    fillAmount: ICON_SIZE * 0.4,
  },
  half: {
    altText: 'Rating star that is half way full',
    fillAmount: ICON_SIZE * 0.5,
  },
  threeQuarters: {
    altText: 'Rating star that is seventy-five percent full',
    fillAmount: ICON_SIZE * 0.6,
  },
  full: {
    altText: 'Rating star that is completely full',
    fillAmount: ICON_SIZE * 1,
  },
};

function StarIcon({ fillStyle, id }) {
  return (
    <div
      className="star-outer"
      style={{
        backgroundImage: `url(${EmptyStar})`,
        display: 'inline-block',
        position: 'relative',
        width: `${ICON_SIZE}px`,
        height: `${ICON_SIZE}px`,
      }}
      key={id}
    >
      <img
        className="star-inner"
        src={FullStar}
        style={{
          position: 'absolute',
          clip: `rect(0, ${FILL_STYLE_SETTINGS[fillStyle].fillAmount}px, ${ICON_SIZE}px, 0)`,
          width: `${ICON_SIZE}px`,
          height: `${ICON_SIZE}px`,
        }}
        alt={FILL_STYLE_SETTINGS[fillStyle].altText}
      />
    </div>
  );
}

StarIcon.propTypes = {
  fillStyle: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default StarIcon;
