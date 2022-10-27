import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarRating from '../ratingsReviews/StarRating.jsx';

// import the star rating file
// takes in product/product id
// does axios get to reviews/meta/product id
// pass in the argument into star rating file
function ProductInfoReviewStars({ avgRating }) {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    setRating(avgRating);
  }, [avgRating]);

  if (rating) {
    return (
      <StarRating rating={avgRating} />
    );
  }
}
export default ProductInfoReviewStars;
