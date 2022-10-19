import React from 'react'

// handle deleting of a card and on storage when x is clicked

function Card({ product }) {
  return (
    <div className='card'>
      <button>*X*</button>
      <text>${product.category}</text>
      <text>${product.name}</text>
      <text>${product.price}</text>
      <div>*STAR RATING*</div>

    </div>
  );
}

export default Card;
