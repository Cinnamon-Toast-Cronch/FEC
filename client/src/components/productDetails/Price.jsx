import React from 'react';

function Price({ selectedStyle }) {
  if (selectedStyle) {
    if (selectedStyle.sale_price) {
      return (
        <div>
          <p style={{ color: 'red' }}>
            $
            {selectedStyle.sale_price}
          </p>
          <s>
            $
            {selectedStyle.original_price}
          </s>
        </div>
      );
    }
    return (
      <div>
        $
        {selectedStyle.original_price}
      </div>
    );
  }
}
export default Price;
