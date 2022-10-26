import React from 'react';

function Price({ price }) {
  if (price[0]['sale_price']) {
    return (
      <div>
        <s className="related-price">${price[0]['original_price']}</s>
        <div className="sale-price">${price[0]['sale_price']}</div>
      </div>
    );
  }
  return (
    <div className="related-price">${price[0]['original_price']}</div>
  );
}

export default Price;
