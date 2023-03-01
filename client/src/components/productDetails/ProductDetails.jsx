import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductInformation from './ProductInformation.jsx';
import StyleSelector from './StyleSelector.jsx';
import ProductImages from './ProductImages.jsx';

function ProductDetails({ product }) {
  const [reviews, setReviews] = useState([]);
  const [styles, setStyles] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState({});

  useEffect(() => {
    axios.get(`/products/${product.id}/styles`).then(({ data }) => {
      setStyles(data.results);
      axios
        .get(`/reviews/meta?product_id=${data.product_id}`)
        .then((response) => {
          setReviews(response.data.ratings);
        });
    });
  }, [product]);

  return (
    <div className="product-details-container">
      <div className="product-components-wrapper">
        <div className="product-image-column">
          <ProductImages selectedStyle={selectedStyle} />
        </div>
        <div className="product-info-column">
          <div className="product-info-container">
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
      <div className="product-overview">
        <p id="product-slogan">{product.slogan}</p>
        <p id="product-description">{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetails;
