import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import RatingBreakdownRow from './RatingBreakdownRow.jsx';

function RatingBreakdown({
  ratings,
  filters,
  resetFilters,
  toggleFilter,
  recommendations,
}) {
  const percentageRecommended =
    (parseInt(recommendations.true, 10) /
      (parseInt(recommendations.true, 10) +
        parseInt(recommendations.false, 10))) *
    100;

  const totalRatingCount = _.reduce(
    ratings,
    (memo, num) => memo + parseInt(num, 10),
    0
  );

  return (
    <div className="rating-breakdown">
      {_.map(ratings, (count, rating) => (
        <RatingBreakdownRow
          key={rating}
          rating={rating}
          ratingCount={parseInt(count, 10)}
          totalRatingCount={totalRatingCount}
          toggleFilter={toggleFilter}
        />
      )).reverse()}
      <p>{`${percentageRecommended}% of buyers recommend this product`}</p>
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
  ratings: PropTypes.shape({
    1: PropTypes.string,
    2: PropTypes.string,
    3: PropTypes.string,
    4: PropTypes.string,
    5: PropTypes.string,
  }),
  filters: PropTypes.array,
  resetFilters: PropTypes.func.isRequired,
  toggleFilter: PropTypes.func.isRequired,
  recommendations: PropTypes.shape({
    false: PropTypes.string,
    true: PropTypes.string,
  }),
};

RatingBreakdown.defaultProps = {
  ratings: {
    1: '0',
    2: '0',
    3: '0',
    4: '0',
    5: '0',
  },
  filters: [],
  recommendations: {
    true: '1',
    false: '0',
  },
};

export default RatingBreakdown;
