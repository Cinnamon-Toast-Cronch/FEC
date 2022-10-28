import React from 'react';
import Price from './Price.jsx';
import ProductInfoReviewStars from './ProductInfoReviewStars.jsx';
import Facebook from '../../assets/images/socialMediaIcons/facebook.svg';
import Twitter from '../../assets/images/socialMediaIcons/twitter.svg';
import Pinterest from '../../assets/images/socialMediaIcons/pinterest.svg';

const { useState, useEffect } = React;

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
      <div>
        <p id="product-category">
          {product.category}
        </p>
        <p id="product-title">
          {product.name}
        </p>

        <div id="product-price">
          <Price selectedStyle={selectedStyle} />
        </div>
      </div>
      <div className="product-overview">
        <p id="product-slogan">
          {product.slogan}
        </p>
        <p id="product-description">
          {product.description}
        </p>
      </div>

      <div className="product-reviews">
        <ProductInfoReviewStars reviews={reviews} reviewCount={reviewCount} />
        <p id="read-reviews">
          {reviewCount > 0 ? `Read all ${reviewCount} reviews` : null}
        </p>
        <div className="social-media-icons">

          <img
            className="facebook-icon"
            src={Facebook}
            alt="facebook icon"
            height="20"
            width="20"
          />
          <img
            className="twitter-icon"
            src={Twitter}
            alt="twitter icon"
            height="20"
            width="20"
          />

          <img
            className="pinterest-icon"
            src={Pinterest}
            alt="pinterest icon"
            height="20"
            width="20"
          />

        </div>
      </div>
    </div>
  );
}

export default ProductInformation;
