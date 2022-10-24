import React from 'react';

function Price({ selectedStyle }) {
  if (selectedStyle) {
    if (selectedStyle.sale_price) {
      return (
        <>
          <p id="sale-price" style={{ color: 'red' }}>
            $
            {selectedStyle.sale_price}
          </p>
          <p id="before-sale-price">
            $
            {selectedStyle.original_price}
          </p>
        </>

      );
    }
    return (
      <p id="no-sale-price">
        $
        {selectedStyle.original_price}
      </p>
    );
  }
}
export default Price;
