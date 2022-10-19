import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import Axios from 'axios';
import RatingSummary from './RatingSummary.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';

function RatingReviewContainer({ product }) {
  const [metadata, setMetadata] = useState({});
  const [filters, setFilters] = useState([]);

  const addFilter = (newFilter) => {
    if (!filters.includes(newFilter)) {
      setFilters([...filters, newFilter].sort());
    }
  };

  const resetFilters = () => {
    setFilters([]);
  };

  useEffect(() => {
    if (!_.isEmpty(product)) {
      Axios.get(`/reviews/meta?product_id=${product.id}`).then((result) => {
        setMetadata(result.data);
      });
    }
  }, [product]);

  return (
    <div className="rating-review-container">
      <div className="rating-review-left-column">
        <RatingSummary ratings={metadata.ratings} />
        <RatingBreakdown
          ratings={metadata.ratings}
          filters={filters}
          addFilter={addFilter}
          resetFilters={resetFilters}
        />
      </div>
      <div className="rating-review-right-column">
        <p>Placeholder right column</p>
      </div>
    </div>
  );
}

RatingReviewContainer.propTypes = {
  product: PropTypes.object.isRequired,
};

export default RatingReviewContainer;
