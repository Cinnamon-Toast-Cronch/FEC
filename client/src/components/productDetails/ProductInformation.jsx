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
    <>
      <div className="product-reviews-container">
        <ProductInfoReviewStars reviews={reviews} reviewCount={reviewCount} />
        <a className="read-reviews" href="#rating-review-container">
          {reviewCount > 0 ? `Read all ${reviewCount} reviews` : null}
        </a>
      </div>

      <div className="category-title-container">
        <p id="product-category">{product.category}</p>
        <p id="product-title">{product.name}</p>
        <Price selectedStyle={selectedStyle} />
      </div>
    </>
  );
}

export default ProductInformation;
