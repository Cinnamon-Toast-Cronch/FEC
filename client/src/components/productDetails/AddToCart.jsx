import React from 'react';
import axios from 'axios';

const { useEffect, useState } = React;
function AddToCart({
  selection, handleSizeView, setConfirmAdd, confirmAdd,
}) {
  const handleAddToCart = () => {
    if (selection.size === '') {
      handleSizeView();
      setConfirmAdd(false);
    } else {
      const skuAndCount = { sku_id: selection.sku, count: selection.quantity };
      axios.post('/cart', skuAndCount)
        .then(() => setConfirmAdd(true));
    }
  };
  return (
    <div>
      <p className="add-confirmation">
        {confirmAdd ? 'Added to cart!' : null}
      </p>
      {selection.size === '' ? null : (
        <button id="addCartButton" type="button" onClick={handleAddToCart}>
          Add To Cart +
        </button>
      )}

    </div>

  );
}
export default AddToCart;
