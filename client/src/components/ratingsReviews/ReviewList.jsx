import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import ReviewTile from './ReviewTile.jsx';

function ReviewList({ productId }) {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState('relevant');

  const sortByDate = (reviewList) =>
    reviewList.sort((a, b) => {
      const dateA = Date.parse(a.date);
      const dateB = Date.parse(b.date);
      if (dateA < dateB) {
        return -1;
      }
      if (dateB > dateA) {
        return 1;
      }
      return 0;
    });

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
          const newReviews =
            sort === 'newest'
              ? sortByDate(response.data.results)
              : response.data.results;
          setReviews(newReviews);
        }
      );
    }
  }, [productId, sort]);

  return (
    <>
      <div className="review-sort-bar">
        <p>Sorted on:</p>
        <select
          onChange={(e) => {
            setSort(e.target.value);
          }}
        >
          <option value="relevant">Relevant</option>
          <option value="newest">Newest</option>
          <option value="helpful">Helpful</option>
        </select>
      </div>
      {reviews.map((review) => (
        <ReviewTile review={review} key={review.review_id} />
      ))}
    </>
  );
}

ReviewList.propTypes = {
  productId: PropTypes.number.isRequired,
};

export default ReviewList;
