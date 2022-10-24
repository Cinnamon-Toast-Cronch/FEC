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
    <div className="rnr-summary">
      <h4 className="rnr-title">RATINGS &amp; REVIEWS</h4>
      <div>
        <p className="rnr-avg-rating">{roundedRating || '0.0'}</p>
        <div className="flex-column">
          <StarRating rating={roundedRating} />
          <p>{`average of ${ratingCount} reviews`}</p>
        </div>
      </div>
    </div>
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
