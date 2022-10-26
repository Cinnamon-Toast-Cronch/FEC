import React from 'react';

function MainImage({ imageUrl, isExpanded, setExpandView }) {
  // -HOVER: mouse icon changes to magnifying glass
  // -CLICK on image -->  gallery changes to expanded view

  return (
    <img
      className="main-image"
      src={imageUrl}
      alt="placeholder"
      style={{ width: '100%' }}
    />
  );
}

export default MainImage;
