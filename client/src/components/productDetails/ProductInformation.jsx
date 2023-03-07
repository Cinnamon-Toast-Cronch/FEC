import React, { useState, useEffect } from 'react';
import Price from './Price.jsx';
import ProductInfoReviewStars from './ProductInfoReviewStars.jsx';

function ProductInformation({ product, reviews, selectedStyle }) {
  const [reviewCount, setReviewCount] = useState(0);
  useEffect(() => {
    const reviewCountList = Object.values(reviews);
    let reviewAmount = 0;
    for (let i = 0; i < reviewCountList.length; i++) {
      reviewAmount += Number(reviewCountList[i]);
    }
    setReviewCount(reviewAmount);
  }, [reviews]);

  return (
    <div className="product-information">
      {/* <div> */}
      <div className="product-reviews">
        <ProductInfoReviewStars reviews={reviews} reviewCount={reviewCount} />
        <p id="read-reviews">
          <a href="#rating-review-container">
            {reviewCount > 0 ? `Read all ${reviewCount} reviews` : null}
          </a>
        </p>
      </div>
      {/* {selectedStyle ? (
        selectedStyle.photos ? (
          <SocialMedia product={product} photo={selectedStyle.photos[0].url} />
        ) : null
      ) : null} */}

      <p id="product-category">{product.category}</p>
      <p id="product-title">{product.name}</p>

      <div id="product-price">
        <Price selectedStyle={selectedStyle} />
      </div>
      {/* </div> */}
      {/* <div className="product-overview">
        <p id="product-slogan">{product.slogan}</p>
        <p id="product-description">{product.description}</p>
      </div> */}
    </div>
  );
}

export default ProductInformation;
