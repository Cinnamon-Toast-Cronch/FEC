import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import Axios from 'axios';
import RatingSummary from './RatingSummary.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ReviewTile from './ReviewTile.jsx';

function RatingReviewContainer({ product }) {
  const [metadata, setMetadata] = useState({});
  const [filters, setFilters] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState('helpful');

  const addFilter = (newFilter) => {
    if (!filters.includes(newFilter)) {
      setFilters([...filters, newFilter].sort());
    }
  };

  const resetFilters = () => {
    setFilters([]);
  };

  const resetAndGetReviews = () => {
    Axios.get(`/reviews?product_id=${product.id}&sort=${sort}`).then(
      (response) => {
        setPage(1);
        setReviews(response.data.results);
      }
    );
  };

  const loadMoreReviews = () => {
    Axios.get(
      `/reviews?product_id=${product.id}&page=${page + 1}&sort=${sort}`
    ).then((response) => {
      setPage(page + 1);
      setReviews([...reviews, response.data.results]);
    });
  };

  useEffect(() => {
    if (!_.isEmpty(product)) {
      Axios.get(`/reviews/meta?product_id=${product.id}`).then((result) => {
        setMetadata(result.data);
      });
      resetAndGetReviews();
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
        {reviews.map((review) => (
          <ReviewTile review={review} key={review.review_id} />
        ))}
      </div>
    </div>
  );
}

RatingReviewContainer.propTypes = {
  product: PropTypes.object.isRequired,
};

export default RatingReviewContainer;
