import React, { useState, useEffect } from 'react';
import RelatedProducts from './relatedCarousel/relatedProducts.jsx';
import Outfits from './outfitCarousel/outfits.jsx';

function Container({ product, setProduct }) {
  if ((Object.keys(product)).length) {
    return (
      <div className="related-container">
        {/* <div className="related-header">Related Products</div> */}
        <div className="header">
          <h1>Related Products</h1>
          <div className='scroll-buttons'>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" />
            <span className="left-arrow">
              <i className="fa fa-arrow-left"></i>
            </span>
            <span className="right-arrow">
              <i className="fa fa-arrow-right"></i>
            </span>
          </div>
        </div>
        <RelatedProducts product={product} setProduct={setProduct} />
        <div className="header">Your Outfit</div>
        <Outfits product={product} />
      </div>
    );
  }
}

export default Container;
