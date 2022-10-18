import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import RatingBreakdownRow from './RatingBreakdownRow.jsx';

function RatingBreakdown({ metadata }) {
  const totalRatingCount = _.reduce(
    metadata.ratings,
    (memo, num) => memo + parseInt(num, 10),
    0
  );

  return (
    <div className="rating-breakdown">
      {_.map(metadata.ratings, (count, rating) => (
        <RatingBreakdownRow
          key={rating}
          rating={rating}
          ratingCount={count}
          totalRatingCount={totalRatingCount}
        />
      )).reverse()}
    </div>
  );
}

RatingBreakdown.propTypes = {
  metadata: PropTypes.object.isRequired,
};

export default RatingBreakdown;
