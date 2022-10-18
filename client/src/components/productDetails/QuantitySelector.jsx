import React from 'react';

const { useState } = React;
function QuantitySelector({ selectedSizeAmount }) {
  // console.log(selectedSizeAmount);
  // const [quantityList, setQuantityList] = useState([]);

  const quantityList = [];
  if (selectedSizeAmount <= 15) {
    for (let i = 1; i <= selectedSizeAmount; i++) {
      quantityList.push(i);
    }
  } else if (selectedSizeAmount > 15) {
    for (let i = 1; i <= 15; i++) {
      quantityList.push(i);
    }
  }

  return (
    <form>
      <label htmlFor="Quantity">Select Quantity</label>
      <select name="quantity" id="quantity">
        <option defaultValue="selected">Select Quantity</option>
        {quantityList.map((quantity) => <option key={quantity} value={quantity}>{quantity}</option>)}
      </select>
    </form>

  );
}
export default QuantitySelector;
