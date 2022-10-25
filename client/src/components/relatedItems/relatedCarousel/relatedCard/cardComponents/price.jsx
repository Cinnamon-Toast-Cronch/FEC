import React from 'react';

function Price({ price }) {
  if (price[2]['sale_price']) {
    return (
      <div>
        <s>${price[2]['original_price']}</s>
        <div className="sale-price">${price[2]['sale_price']}</div>
      </div>
    );
  }
  return (
    <div className="related-price">${price[2]['original_price']}</div>
  );
}

export default Price;
