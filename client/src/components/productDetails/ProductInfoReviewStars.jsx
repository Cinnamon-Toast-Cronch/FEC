import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'underscore';
import StarRating from '../ratingsReviews/StarRating.jsx';

function ProductInfoReviewStars({ reviews, reviewCount }) {
  const avgRating = _.reduce(reviews, (memo, num, key) => memo + num * parseInt(key, 10), 0)
  / reviewCount;
  if (avgRating) {
    return (
      <StarRating rating={parseFloat(avgRating.toFixed(1), 10)} />
    );
  }
}
export default ProductInfoReviewStars;
