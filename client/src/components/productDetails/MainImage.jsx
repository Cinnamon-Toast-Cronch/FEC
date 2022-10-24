import React from 'react';

function MainImage({ imageUrl, handleExpansion }) {
  //   -HOVER: mouse icon changes to magnifying glass
  // -CLICK on image -->  gallery changes to expanded view

  // const expandView = () => {
  //   console.log('Expand View');
  // };
  return (
    <img
      className="main-image"
      src={imageUrl}
      alt="placeholder"
      style={{ width: '100%' }}
      onClick={(e) => handleExpansion(e.target.src)}
    />
  );
}
export default MainImage;
