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
      <button id="addCartButton" type="button" onClick={() => handleAddToCart()}>
        Add To Cart +
      </button>
    </div>

  );
}
export default AddToCart;
