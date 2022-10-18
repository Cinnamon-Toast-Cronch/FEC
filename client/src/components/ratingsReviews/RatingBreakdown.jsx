import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import RatingBreakdownRow from './RatingBreakdownRow.jsx';

function RatingBreakdown({ metadata }) {
  return (
    <div className="rating-breakdown">
      {_.map(metadata.ratings, (count, val) => (
        <RatingBreakdownRow key={val} />
      ))}
    </div>
  );
}

RatingBreakdown.propTypes = {
  metadata: PropTypes.object.isRequired,
};

export default RatingBreakdown;
