import React from 'react';
import Cart from '../../assets/images/AddToCart.svg';

const { useEffect, useState } = React;
function AddToCart({ selection, handleSizeView }) {
  const cartStorage = JSON.parse(localStorage.getItem('cart')) || [];
  const [cartSelection, setCartSelection] = useState(cartStorage);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartSelection));
  }, [cartSelection]);

  const handleAddToCart = () => {
    if (selection.size === '') {
      handleSizeView();
    } else {
      setCartSelection([...cartSelection, selection]);
    }
  };
  return (
    <div>
      <button type="button" onClick={() => handleAddToCart()}>
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
