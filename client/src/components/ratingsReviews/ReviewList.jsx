import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import ReviewTile from './reviewTile.jsx';

function ReviewList({ productId }) {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState('helpful');

  const loadMoreReviews = () => {
    Axios.get(
      `/reviews?product_id=${productId}&page=${page + 1}&sort=${sort}`
    ).then((response) => {
      setPage(page + 1);
      setReviews([...reviews, response.data.results]);
    });
  };

  useEffect(() => {
    if (productId !== undefined) {
      Axios.get(`/reviews?product_id=${productId}&sort=${sort}`).then(
        (response) => {
          setPage(1);
          setReviews(response.data.results);
        }
      );
    }
  }, [productId, sort]);

  return (
    <>
      {reviews.map((review) => (
        <ReviewTile review={review} key={review.review_id} />
      ))}
    </>
  );
}

export default ReviewList;
