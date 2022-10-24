import React from 'react';

function Price({ price }) {

// make sure prop being passed down is the whole product object and not just the original price
// check if there is a sales property
// conditional render the return element to strikethrough original price element
// and return sale as second element
  return (
    <div className="related-price">{price}</div>
  );
}

export default Price;
