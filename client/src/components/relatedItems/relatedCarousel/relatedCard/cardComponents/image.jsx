import React from 'react';
import Button from './actionButton.jsx';

function Image({ images, handlesComparePopup }) {
  const image = images;
  return (
    <div className="related-image">
      <img className="related-img" src={image}></img>
      <Button handlesComparePopup={handlesComparePopup} />
    </div>
  );
}

export default Image;
