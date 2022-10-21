import React from 'react';
import Price from './Price.jsx';

function ProductInformation({ product, reviews, selectedStyle }) {
  let ratingTotal = 0;
  for (let i = 0; i < reviews.length; i++) {
    ratingTotal += reviews[i].rating;
  }
  const avgRating = ratingTotal / reviews.length;

  return (
    <div>
      Title:
      {' '}
      {product.name}
      <br />
      Category:
      {' '}
      {product.category}
      <br />
      <Price selectedStyle={selectedStyle} />
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
      <br />
      Average Rating:
      {' '}
      {avgRating}
      ⭐️
      <br />
      Share on Social Media Icons
    </div>
  );
}

export default ProductInformation;
