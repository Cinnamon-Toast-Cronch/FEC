import React from 'react';
import axios from 'axios';

const { useEffect, useState } = React;
function AddToCart({ selection, handleSizeView, setConfirmAdd, confirmAdd }) {
  const handleAddToCart = () => {
    if (selection.size === '') {
      handleSizeView();
      setConfirmAdd(false);
    } else {
      const skuAndCount = { sku_id: selection.sku, count: selection.quantity };
      axios.post('/cart', skuAndCount).then(() => setConfirmAdd(true));
    }
  };
  return (
    <>
      {selection.size === '' ? (
        <button
          id="addCartButton"
          type="button"
          onClick={handleAddToCart}
          disabled
          style={{ cursor: 'not-allowed' }}
        >
          Add To Cart
        </button>
      ) : (
        <button id="addCartButton" type="button" onClick={handleAddToCart}>
          {confirmAdd ? 'Added!' : 'Add To Cart'}
        </button>
      )}
    </>
  );
}
export default AddToCart;

// import React from 'react';
// import axios from 'axios';

// const { useEffect, useState } = React;
// function AddToCart({ selection, handleSizeView, setConfirmAdd, confirmAdd }) {
//   const handleAddToCart = () => {
//     if (selection.size === '') {
//       handleSizeView();
//       setConfirmAdd(false);
//     } else {
//       const skuAndCount = { sku_id: selection.sku, count: selection.quantity };
//       axios.post('/cart', skuAndCount).then(() => setConfirmAdd(true));
//     }
//   };
//   return (
//     <>
//       <p className="add-confirmation">{confirmAdd ? 'Added to cart!' : null}</p>
//       {selection.size === '' ? (
//         <button
//           id="addCartButton"
//           type="button"
//           onClick={handleAddToCart}
//           style={{ visibility: 'hidden' }}
//         >
//           Add To Cart
//         </button>
//       ) : (
//         <button
//           id="addCartButton"
//           type="button"
//           style={{ visibility: 'visible' }}
//           onClick={handleAddToCart}
//         >
//           Add To Cart
//         </button>
//       )}
//     </>
//   );
// }
// export default AddToCart;
