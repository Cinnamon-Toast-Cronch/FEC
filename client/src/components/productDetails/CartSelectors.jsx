import React, { useState, useEffect } from 'react';
import QuantitySelector from './QuantitySelector.jsx';
import SizeSelector from './SizeSelector.jsx';
import AddToCart from './AddToCart.jsx';

function CartSelectors({ selectedStyle }) {
  const [skus, setSkus] = useState({});
  const [sizesAndAmount, setSizesAndAmount] = useState([]);
  const [skuSizes, setSkuSizes] = useState([]);
  const [selectedSizeAmount, setSelectedSizeAmount] = useState(0);
  const initialSelection = {
    sku: '',
    style: '',
    size: '',
    quantity: '',
  };
  const [selection, setSelection] = useState(initialSelection);
  const [addCartNoSize, setAddCartNoSize] = useState(false);
  const [confirmAdd, setConfirmAdd] = useState(false);

  useEffect(() => {
    setSelectedSizeAmount(0);
    const currSkus = selectedStyle;
    if (currSkus.skus) {
      setSizesAndAmount(Object.values(currSkus.skus));
      setSkuSizes(Object.keys(currSkus.skus));
      setSkus(currSkus.skus);
    }

    setSelection({ ...selection, style: selectedStyle.name });
    setConfirmAdd(false);
  }, [selectedStyle]);

  const handleSizeSelection = (e) => {
    const currentSku = skuSizes[e.target.value];
    setSelectedSizeAmount(skus[currentSku].quantity);
    setSelection({
      ...selection,
      size: skus[currentSku].size,
      sku: currentSku,
      quantity: 1,
    });
    setAddCartNoSize(false);
    setConfirmAdd(false);
    e.preventDefault();
  };

  const handleQuantity = (e) => {
    setSelection({ ...selection, quantity: Number(e.target.value) });
    setConfirmAdd(false);
    e.preventDefault();
  };

  const handleSizeView = () => {
    setAddCartNoSize(true);
  };

  return (
    <div className="cart-selections">
      <div className="cart-form-container">
        <SizeSelector
          handleSizeSelection={handleSizeSelection}
          addCartNoSize={addCartNoSize}
          selectedSizeAmount={selectedSizeAmount}
          skus={skus}
          sizesAndAmount={sizesAndAmount}
          skuSizes={skuSizes}
        />
        <QuantitySelector
          selectedSizeAmount={selectedSizeAmount}
          handleQuantity={handleQuantity}
        />
      </div>
      <div className="cart-container">
        <AddToCart
          selection={selection}
          handleSizeView={handleSizeView}
          setConfirmAdd={setConfirmAdd}
          confirmAdd={confirmAdd}
        />
      </div>
    </div>
  );
}

export default CartSelectors;
