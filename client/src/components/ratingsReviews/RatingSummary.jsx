import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import StarRating from './StarRating.jsx';

function RatingSummary({ ratings }) {
  const ratingCount = _.reduce(
    ratings,
    (memo, num) => memo + parseInt(num, 10),
    0
  );
  const avgRating =
    _.reduce(ratings, (memo, num, key) => memo + num * parseInt(key, 10), 0) /
    ratingCount;

  const roundedRating = Math.round(avgRating * 10) / 10;

  return (
    <>
      <h4>RATINGS &amp; REVIEWS</h4>
      <p>{roundedRating || '0.0'}</p>
      <StarRating rating={roundedRating} />
      <p>{`average of ${ratingCount} reviews`}</p>
    </>
  );
}

RatingSummary.propTypes = {
  ratings: PropTypes.shape({
    1: PropTypes.string,
    2: PropTypes.string,
    3: PropTypes.string,
    4: PropTypes.string,
    5: PropTypes.string,
  }),
};

RatingSummary.defaultProps = {
  ratings: {
    1: '0',
    2: '0',
    3: '0',
    4: '0',
    5: '0',
  },
};

export default RatingSummary;
