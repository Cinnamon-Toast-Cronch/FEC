import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarRating from '../ratingsReviews/StarRating.jsx';

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
