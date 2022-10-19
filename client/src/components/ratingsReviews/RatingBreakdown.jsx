import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import RatingBreakdownRow from './RatingBreakdownRow.jsx';

function RatingBreakdown({ metadata, filters, resetFilters, addFilter }) {
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
          ratingCount={parseInt(count, 10)}
          totalRatingCount={totalRatingCount}
          addFilter={addFilter}
        />
      )).reverse()}
      <h6>Applied Filters</h6>
      <button
        className="reset-filter-button text-like-button"
        type="button"
        onClick={resetFilters}
      >
        Reset
      </button>
      <div className="filter-icons">
        {filters.map((filter) => (
          <p key={filter} className="filter-icon">
            {`${filter} stars`}
          </p>
        ))}
      </div>
    </div>
  );
}

RatingBreakdown.propTypes = {
  metadata: PropTypes.object.isRequired,
  filters: PropTypes.array,
  resetFilters: PropTypes.func.isRequired,
  addFilter: PropTypes.func.isRequired,
};

RatingBreakdown.defaultProps = {
  filters: [],
};

export default RatingBreakdown;
