import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountStarRatings from './countStarRatings.jsx';

function Stars({ product }) {
  const [ratings, setRatings] = useState({});

  useEffect(() => {
    axios.get(`/reviews/meta?product_id=${product.id}`)
      .then((res) => {
        setRatings(res.data.ratings);
      });
  }, [product]);

  if (Object.keys(ratings).length) {
    return (
      <CountStarRatings ratings={ratings} />
    );
  }
}

export default Stars;
