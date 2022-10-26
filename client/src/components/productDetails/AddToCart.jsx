import React from 'react';
import Cart from '../../assets/images/AddToCart.svg';

function AddToCart({ selection, handleSizeView }) {
  // Note: implement local storage for functionality

  // Note: will implement form pop up view if size selection is empty
  const handleAddToCart = () => {
    if (selection.size === '') {
      handleSizeView();
    }
  };
  return (
    <div>
      <button type="button" onClick={(e) => handleAddToCart()}>
        <img
          className="cart-icon"
          src={Cart}
          alt="add to cart"
          height="20"
          width="20"
        />

      </button>
    </div>

  );
}
export default AddToCart;
