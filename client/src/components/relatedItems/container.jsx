import React from 'react';
import RelatedProducts from './relatedCarousel/relatedProducts.jsx';
import Outfits from './outfitCarousel/outfits.jsx';

function Container({ product, setProduct }) {
  if ((Object.keys(product)).length) {
    return (
      <div className="related-container">
        <div className="header">
          <h1>Related Products</h1>
        </div>
        <RelatedProducts product={product} setProduct={setProduct} />
        <div className="header">Your Outfit</div>
        <Outfits product={product} />
      </div>
    );
  }
}

export default Container;
