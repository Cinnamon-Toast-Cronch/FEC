import React from 'react';

function AddToCart({ selection, handleSizeView }) {
  // Note: implement local storage for functionality

  const handleAddToCart = () => {
    if (selection.size === '') {
      handleSizeView();
    }
  };
  return (
    <div>
      <button onClick={(e) => handleAddToCart()}> Add to Cart </button>
    </div>

  );
}
export default AddToCart;
