import React from 'react';
import QuantitySelector from './QuantitySelector.jsx';

const { useEffect, useState } = React;

function SizeSelector({ selectedStyle }) {
  const [skus, setSkus] = useState({});
  const [selectedSizeAmount, setSelectedSizeAmount] = useState(0);

  useEffect(() => {
    if (selectedStyle) {
      console.log('selectedStyle', selectedStyle);
      setSelectedSizeAmount(0);
      return setSkus(selectedStyle.skus);
    }
  }, [selectedStyle]);

  const handleChange = (e) => {
    setSelectedSizeAmount(e.target.value);
    setSelectedSizeAmount(0);
  };

  if (skus) {
    const sizesAndAmount = Object.values(skus);
    const skuSizes = Object.keys(skus);

    return (
      <form onChange={(e) => setSelectedSizeAmount(e.target.value)}>
        <label htmlFor="Sizes">Select Size</label>
        <select name="sizes" id="sizes">
          <option defaultValue="selected">{(sizesAndAmount.length === 0) ? 'Out Of Stock' : 'Select Size'}</option>
          {sizesAndAmount.map((size, index) => <option key={skuSizes[index]} value={size.quantity}>{size.size ? size.size : null}</option>)}
        </select>
        <QuantitySelector selectedSizeAmount={selectedSizeAmount} />
      </form>

    );
  }
}

export default SizeSelector;
