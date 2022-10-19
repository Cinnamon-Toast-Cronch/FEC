import React from 'react';
import RelatedProducts from './relatedProducts.jsx';
import Outfits from './outfits.jsx';

function Container({ product }) {
  return (
    <div className="container" data-testid="con-1">
      <RelatedProducts product={product} />
      <Outfits />
    </div>
  );
}

export default Container;
