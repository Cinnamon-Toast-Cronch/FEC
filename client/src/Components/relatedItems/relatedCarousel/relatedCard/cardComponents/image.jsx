import React from 'react';
import Button from './actionButton.jsx';

function Image({ images, handlesComparePopup }) {
  return (
    <div className="related-image-box">
      <img src={images}></img>
      <Button handlesComparePopup={handlesComparePopup} />
    </div>
  );
}

export default Image;
testing

