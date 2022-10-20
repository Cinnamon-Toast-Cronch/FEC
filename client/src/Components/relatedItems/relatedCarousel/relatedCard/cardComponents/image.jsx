import React from 'react';
import Button from './actionButton.jsx';

function Image({ images, handlesComparePopup }) {
  return (
    <div className="image-box">
      <img src={images}></img>
      <Button className="compare-button" handlesComparePopup={handlesComparePopup}>*Placeholder*</Button>
    </div>
  );
}

export default Image;
