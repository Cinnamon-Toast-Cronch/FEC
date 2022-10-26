import React from 'react';
import Price from './Price.jsx';
import ProductInfoReviewStars from './ProductInfoReviewStars.jsx';
import Facebook from '../../assets/images/socialMediaIcons/facebook.svg';
import Twitter from '../../assets/images/socialMediaIcons/twitter.svg';
import Pinterest from '../../assets/images/socialMediaIcons/pinterest.svg';

function ProductInformation({ product, reviews, selectedStyle }) {
  let ratingTotal = 0;
  for (let i = 0; i < reviews.length; i++) {
    ratingTotal += reviews[i].rating;
  }
  const avgRating = ratingTotal / reviews.length;
  console.log('avgRate', avgRating);

  return (
    <div className="product-information">
      <div>
        <p id="product-title">
          {product.name}
        </p>
        <p id="product-category">
          {product.category}
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
        <ProductInfoReviewStars avgRating={avgRating} />
        <p id="read-reviews">
          {reviews.length > 0 ? `Read all ${reviews.length} reviews` : null}
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
