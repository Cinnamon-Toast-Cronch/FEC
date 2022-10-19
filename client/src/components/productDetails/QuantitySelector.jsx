import React from 'react';
import axios from 'axios';

const { useState } = React;
function QuantitySelector({ selectedSizeAmount, handleQuantity }) {
  const quantityList = [];
  if (selectedSizeAmount <= 15) {
    for (let i = 2; i <= selectedSizeAmount; i++) {
      quantityList.push(i);
    }
  } else if (selectedSizeAmount > 15) {
    for (let i = 2; i <= 15; i++) {
      quantityList.push(i);
    }
  }

  return (
    <div>
      <form onChange={(e) => handleQuantity(e)}>
        <label htmlFor="Quantity">Select Quantity</label>
        <select name="quantity" id="quantity">
          {(selectedSizeAmount > 0) ? <option defaultValue="selected"> 1 </option> : <option defaultValue="selected" disabled> - </option>}
          {quantityList.map((quantity) => <option key={quantity} value={quantity}>{quantity}</option>)}
        </select>
      </form>
    </div>

  );
}
export default QuantitySelector;
