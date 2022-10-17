import React from 'react';
import axios from 'axios';

function ProductDetails({ product }) {
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
    </p>

  );
}

export default ProductDetails;
