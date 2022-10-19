import React from 'react';
import RelatedProducts from './relatedProducts.jsx';
import Outfits from './outfits.jsx';

function Container({ product }) {
  return (
    <div className="container">
      <RelatedProducts product={product} testId="con-1" />
      <Outfits />
    </div>
  );
}

export default Container;
