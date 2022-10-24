import React from 'react';
import _ from 'underscore';
import StarRating from '../../../../ratingsReviews/StarRating.jsx';

function CountRatings({ ratings }) {
  const ratingCount = _.reduce(
    ratings,
    (memo, num) => memo + parseInt(num, 10),
    0,
  );
  const avgRating = _.reduce(ratings, (memo, num, key) => memo + num * parseInt(key, 10), 0)
  / ratingCount;

  const roundedRating = Math.round(avgRating * 10) / 10;

  return (
    <StarRating rating={roundedRating} />
  );
}

export default CountRatings;
