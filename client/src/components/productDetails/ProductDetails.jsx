import React from 'react';
import axios from 'axios';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import ImageGalleryDefault from './ImageGalleryDefault.jsx';

const { useState, useEffect } = React;

function ProductDetails({ product }) {
  const [reviews, setReviews] = useState([]);
  const [styles, setStyles] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState({});

  useEffect(() => {
    axios.get(`/products/${product.id}/styles`)
      .then(({ data }) => {
        setStyles(data.results);
        const requestParams = { params: { product_id: data.product_id } };
        return requestParams;
      })
      .then((requestParams) => {
        axios.get('/reviews/', requestParams)
          .then((response) => {
            // console.log('response', response.data.results);
            setReviews(response.data.results);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log('err', err);
      });
  }, [product]);

  return (
    <div>
      <ProductInformation product={product} reviews={reviews} selectedStyle={selectedStyle} />
      <ImageGalleryDefault selectedStyle={selectedStyle} />
      <StyleSelector styles={styles} setSelectedStyle={setSelectedStyle} selectedStyle={selectedStyle} />
    </div>
  );
}

export default ProductDetails;
