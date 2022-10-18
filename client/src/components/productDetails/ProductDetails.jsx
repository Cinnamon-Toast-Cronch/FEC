import React from 'react';
import axios from 'axios';

const { useState } = React;

function ProductDetails({ product }) {
  const [reviews, setReviews] = useState([]);
  if (product.id !== undefined) {
    axios.get(`/reviews/?product_id=${product.id}`)
      .then(({ data }) => {
        setReviews(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // let ratingTotal = 0;
  // for (let i = 0; i < reviews.length; i++) {
  //   ratingTotal += reviews[i].rating;
  // }
  // const avgRating = ratingTotal / reviews.length;

  return (
    <p>
      Title:
      {' '}
      {product.name}
      <br />
      Category:
      {' '}
      {product.category}
      <br />
      Price:
      {' '}
      $
      {product.default_price}
      <br />
      Product Overview:
      {' '}
      <br />
      {product.slogan}
      <br />
      {product.description}
      <br />
      Read all
      {' '}
      {reviews.length}
      {' '}
      reviews.
      {/* <br />
      Average Rating:
      {' '}
      {avgRating} */}
    </p>

  );
}

export default ProductDetails;
