import React from 'react';
import axios from 'axios';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import ProductImages from './ProductImages.jsx';

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
            setReviews(response.data.results);
          });
      });
  }, [product]);

  return (
    <div className="product-details-container">
      <div className="product-components-wrapper">
        <div className="product-image-column">
          <div className="image-wrapper">
            <ProductImages selectedStyle={selectedStyle} />
          </div>
        </div>
        <div className="product-info-column">
          <ProductInformation
            product={product}
            reviews={reviews}
            selectedStyle={selectedStyle}
          />
          <StyleSelector
            styles={styles}
            setStyles={setStyles}
            setSelectedStyle={setSelectedStyle}
            selectedStyle={selectedStyle}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
