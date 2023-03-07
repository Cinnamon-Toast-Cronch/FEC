import React from 'react';

function SizeSelector({
  handleSizeSelection,
  addCartNoSize,
  selectedSizeAmount,
  sizesAndAmount,
  skuSizes,
}) {
  return (
    <form
      onChange={(e) => {
        handleSizeSelection(e);
      }}
    >
      {addCartNoSize ? <p className="no-size">Please select size.</p> : null}
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
  );
}

export default SizeSelector;
