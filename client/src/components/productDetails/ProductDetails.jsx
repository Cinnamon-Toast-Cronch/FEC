import React from 'react';
import axios from 'axios';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';

const { useState, useEffect } = React;

function ProductDetails({ product }) {
  const [reviews, setReviews] = useState([]);
  const [styles, setStyles] = useState([]);

  useEffect(() => {
    axios.get(`/products/${product.id}/styles`)
      .then(({ data }) => {
        setStyles(data.results);
        console.log(data.results);
        const request = { params: { product_id: data.product_id } };
        axios.get('/reviews/', request)
          .then((response) => {
            // console.log('response', response.data.results);
            setReviews(response.data.results);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [product]);

  return (
    <div>
      <ProductInformation product={product} reviews={reviews} />
      <StyleSelector styles={styles} />
    </div>
  );
}

export default ProductDetails;
