import React from 'react';

function AddToCart({ selection }) {
  // create obj to house style, size, quantity
  // create button
  // no stock = hidden
  // onClick dependencies
  // size = select size
  // open dropdown + message appear above dropdown
  // valid = add via post req via handler

  // -BUTTON to place style, size,
  // quantity to cart
  // -DEPENDENCY = selected size/quantity
  //  - if size selector = 'Select Size' then CLICK opens size dropdown
  //    + message will appear above drop down 'Please select size'
  //  - no stock --> button = hidden
  //  - valid size/quantity --> add product to cart
  console.log('addtocartselection', selection);
  return (
    <div>Add to Cart</div>

  );
}
export default AddToCart;
