import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import StarRating from './StarRating.jsx';

function RatingSummary({ metadata }) {
  const ratingCount = _.reduce(
    metadata.ratings,
    (memo, num) => memo + parseInt(num, 10),
    0
  );
  const avgRating =
    _.reduce(
      metadata.ratings,
      (memo, num, key) => memo + num * parseInt(key, 10),
      0
    ) / ratingCount;

  const roundedRating = Math.round(avgRating * 10) / 10;

  return (
    <>
      <h4>RATINGS &amp; REVIEWS</h4>
      <p>{roundedRating}</p>
      <StarRating rating={roundedRating} />
      <p>{`average of ${ratingCount} reviews`}</p>
    </>
  );
}

RatingSummary.propTypes = {
  metadata: PropTypes.object.isRequired,
};

export default RatingSummary;
