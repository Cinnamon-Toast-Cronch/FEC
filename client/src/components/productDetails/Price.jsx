import React from 'react';

function Price({ selectedStyle }) {
  if (selectedStyle) {
    if (selectedStyle.sale_price) {
      return (
        <>
          <p className="price" id="sale-price">
            ${selectedStyle.sale_price}
          </p>
          <p className="price" id="before-sale-price">
            ${selectedStyle.original_price}
          </p>
        </>
      );
    }
    return <p className="price">${selectedStyle.original_price}</p>;
  }
}
export default Price;
