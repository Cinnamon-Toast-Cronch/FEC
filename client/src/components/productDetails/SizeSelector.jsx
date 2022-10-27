import React from 'react';
import QuantitySelector from './QuantitySelector.jsx';
import AddToCart from './AddToCart.jsx';

const { useEffect, useState } = React;

function SizeSelector({ selectedStyle }) {
  const [skus, setSkus] = useState({});
  const [selectedSizeAmount, setSelectedSizeAmount] = useState(0);
  const initialSelection = { style: '', size: '', quantity: '' };
  const [selection, setSelection] = useState(initialSelection);
  const [addCartNoSize, setAddCartNoSize] = useState(false);

  useEffect(() => {
    if (selectedStyle) {
      setSelectedSizeAmount(0);
      setSkus(selectedStyle.skus);
      setSelection({ ...selection, style: selectedStyle.name });
    }
  }, [selectedStyle]);

  if (skus) {
    const sizesAndAmount = Object.values(skus);
    const skuSizes = Object.keys(skus);

    const handleSizeSelection = (e) => {
      const currentSku = skuSizes[e.target.value];
      console.log('skuObj', skus[currentSku]);
      setSelectedSizeAmount(skus[currentSku].quantity);
      setSelection({ ...selection, size: skus[currentSku].size });
      setAddCartNoSize(false);
      e.preventDefault();
    };

    const handleQuantity = (e) => {
      setSelection({ ...selection, quantity: e.target.value });
      e.preventDefault();
    };

    const handleSizeView = () => {
      setAddCartNoSize(true);
    };

    return (
      <div>
        <div id="sizeDropdown" className="sizeContent">
          <form onChange={(e) => {
            handleSizeSelection(e);
          }}
          >
            {addCartNoSize ? <p className="no-size">Please select size.</p> : null}
            <label htmlFor="Sizes">Select Size</label>
            <select name="sizes" id="sizes">
              {selectedSizeAmount ? <option defaultValue="selected" disabled>{(sizesAndAmount.length === 0) ? 'Out Of Stock' : 'Select Size'}</option> : <option defaultValue="selected">{(sizesAndAmount.length === 0) ? 'Out Of Stock' : 'Select Size'}</option>}
              {sizesAndAmount.map((size, index) => (
                <option
                  key={skuSizes[index]}
                  value={index}
                >
                  {size.size ? size.size : null}
                </option>
              ))}
            </select>
          </form>
        </div>
        <QuantitySelector selectedSizeAmount={selectedSizeAmount} handleQuantity={handleQuantity} />
        {(sizesAndAmount.length === 0) ? null : (
          <AddToCart
            selection={selection}
            handleSizeView={handleSizeView}
          />
        )}
      </div>

    );
  }
}

export default SizeSelector;
