import React from 'react';
import QuantitySelector from './QuantitySelector.jsx';
import AddToCart from './AddToCart.jsx';

const { useEffect, useState } = React;

function SizeSelector({ selectedStyle }) {
  const [skus, setSkus] = useState({});
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
    if (selectedStyle) {
      setSelectedSizeAmount(0);
      setSkus(selectedStyle.skus);
      setSelection({ ...selection, style: selectedStyle.name });
      setConfirmAdd(false);
    }
  }, [selectedStyle]);

  if (skus) {
    const sizesAndAmount = Object.values(skus);
    const skuSizes = Object.keys(skus);

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
      <>
        <div className="size-quantity-selectors">
          <form
            onChange={(e) => {
              handleSizeSelection(e);
            }}
          >
            {addCartNoSize ? (
              <p className="no-size">Please select size.</p>
            ) : null}

            <select name="sizes" id="sizes">
              {selectedSizeAmount ? (
                <option defaultValue="selected" disabled>
                  {sizesAndAmount.length === 0 ? 'Out Of Stock' : 'Select Size'}
                </option>
              ) : (
                <option defaultValue="selected">
                  {sizesAndAmount.length === 0 ? 'Out Of Stock' : 'Select Size'}
                </option>
              )}
              {sizesAndAmount.map((size, index) => (
                <option key={skuSizes[index]} value={index}>
                  {size.size ? size.size : null}
                </option>
              ))}
            </select>
          </form>
          <QuantitySelector
            selectedSizeAmount={selectedSizeAmount}
            handleQuantity={handleQuantity}
          />
        </div>

        {sizesAndAmount.length === 0 ? null : (
          <AddToCart
            selection={selection}
            handleSizeView={handleSizeView}
            setConfirmAdd={setConfirmAdd}
            confirmAdd={confirmAdd}
          />
        )}
      </>
    );
  }
}

export default SizeSelector;
