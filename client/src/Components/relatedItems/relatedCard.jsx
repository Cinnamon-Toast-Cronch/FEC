import React, { useState } from 'react';
// make another component for the pop up comparison and import

// handleStarClick
// handleCardClick ----need to have a set state prop to change state on app

function Card({ item }) {

  const [starAction, setStarAction] = useState(false);

  const handleStarAction = () => {
    setStarAction(!starAction);
  }
console.log(item)
  return (
    <div className='card'>
      {/* {starAction? return <Comparison/> : return null} */}
      {/* <img src=></img> */}
      <button onClick={handleStarAction}>*STAR*</button>
      <div className="category">{item.category}</div>
      <div className="name">{item.name}</div>
      <div className="price">{item.price}</div>
      <div className="rating">*STAR RATING*</div>
    </div>
  );
}

export default Card;
