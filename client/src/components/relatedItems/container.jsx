import React from 'react';
import RelatedProducts from './relatedCarousel/relatedProducts.jsx';
import Outfits from './outfitCarousel/outfits.jsx';

function Container({ product }) {
  if ((Object.keys(product)).length) {
    return (
      <div className="related-container">
        <div className="related-header">Related Products</div>
        <RelatedProducts product={product} />
        <div className="related-header">Your Outfit</div>
        <Outfits product={product} />
      </div>
    );
  }
}

export default Container;
