import React from 'react';

const { useEffect, useState } = React;

function SizeSelector({ selectedStyle }) {
  const [skus, setSkus] = useState({});

  useEffect(() => {
    if (selectedStyle) {
      setSkus(selectedStyle.skus);
    }
  }, [selectedStyle]);

  if (skus) {
    const sizes = Object.values(skus);
    const skuSizes = Object.keys(skus);

    return (
      <div>
        Size Selector
        <label htmlFor="Sizes">Select Size</label>

        <select name="sizes" id="sizes">
          <option value="none" selected>{(sizes.length === 0) ? 'Out Of Stock' : 'Select Size'}</option>
          {sizes.map((size, index) => <option key={skuSizes[index]} value={size.size}>{size.size ? size.size : null}</option>)}
        </select>
      </div>

    );
  }
}
export default SizeSelector;
