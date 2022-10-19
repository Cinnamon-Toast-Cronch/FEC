import React from 'react';
import QuantitySelector from './QuantitySelector.jsx';
import AddToCart from './AddToCart.jsx';

const { useEffect, useState } = React;

function SizeSelector({ selectedStyle }) {
  const [skus, setSkus] = useState({});
  const [selectedSizeAmount, setSelectedSizeAmount] = useState(0);
  // const [selectedSize, setSelectedSize] = useState('');
  const initialSelection = { size: '', quantity: '' };
  const [selection, setSelection] = useState(initialSelection);

  useEffect(() => {
    if (selectedStyle) {
      // console.log('selectedStyle', selectedStyle);
      setSelectedSizeAmount(0);
      setSkus(selectedStyle.skus);
    }
  }, [selectedStyle]);

  if (skus) {
    const sizesAndAmount = Object.values(skus);
    // console.log('sizesandamount', sizesAndAmount);
    const skuSizes = Object.keys(skus);
    // console.log('skuSizes', skuSizes);

    const handleSizeSelection = (e) => {
      // console.log('e target val', e.target.value);
      const currentSku = skuSizes[e.target.value];
      // console.log('currentSku', currentSku);
      console.log('skuObj', skus[currentSku]);
      setSelectedSizeAmount(skus[currentSku].quantity);
      setSelection({ ...selection, size: skus[currentSku].size });
      console.log('selection', selection);
      e.preventDefault();
    };

    const handleQuantity = (e) => {
      setSelection({ ...selection, quantity: e.target.value });
      e.preventDefault();
    };

    return (
      <div>
        <form onChange={(e) => {
          handleSizeSelection(e);
        }}
        >
          <label htmlFor="Sizes">Select Size</label>
          <select name="sizes" id="sizes">
            <option defaultValue="selected">{(sizesAndAmount.length === 0) ? 'Out Of Stock' : 'Select Size'}</option>
            {sizesAndAmount.map((size, index) => <option key={skuSizes[index]} value={index}>{size.size ? size.size : null}</option>)}
          </select>
        </form>
        <QuantitySelector selectedSizeAmount={selectedSizeAmount} handleQuantity={handleQuantity} />
        <AddToCart selection={selection} />
      </div>

    );
  }
}

export default SizeSelector;
