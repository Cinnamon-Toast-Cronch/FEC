import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import Axios from 'axios';
import RatingSummary from './RatingSummary.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ReviewList from './ReviewList.jsx';
import CharacteristicVisualization from './CharacteristicVisualization.jsx';

function RatingReviewContainer({ product }) {
  const [metadata, setMetadata] = useState({ characteristics: {} });
  const [filters, setFilters] = useState([]);

  const toggleFilter = (filter) => {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter].sort());
    } else {
      setFilters(_.difference([...filters], [filter]));
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
          toggleFilter={toggleFilter}
          resetFilters={resetFilters}
          recommendations={metadata.recommended}
        />
        <hr />
        {_.map(metadata.characteristics, (val, key) => (
          <CharacteristicVisualization
            characteristic={key}
            averageRating={parseFloat(val.value, 10)}
            key={key}
          />
        ))}
      </div>
      <div className="rating-review-right-column">
        <ReviewList
          productId={product.id}
          filters={filters}
          characteristics={metadata.characteristics}
        />
      </div>
    </div>
  );
}

RatingReviewContainer.propTypes = {
  product: PropTypes.object.isRequired,
};

export default RatingReviewContainer;
