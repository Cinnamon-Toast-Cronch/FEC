import React from 'react';
import RelatedProducts from './relatedCarousel/relatedProducts.jsx';
import Outfits from './outfitCarousel/outfits.jsx';

function Container({ product }) {
  if ((Object.keys(product)).length) {
    return (
      <div className="container">
      <RelatedProducts product={product} />
      <Outfits />
    </div>
  );
  } else {
  return null;
}
}

export default Container;
