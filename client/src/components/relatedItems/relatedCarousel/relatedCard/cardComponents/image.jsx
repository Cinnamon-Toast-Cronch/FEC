import React from 'react';
import Button from './actionButton.jsx';

function Image({ images, handlesComparePopup }) {
  const image = images;
  return (
    <div className="related-image">
      {
        image ?
          <img className="related-img" src={image} alt="product" />
          : <div className="related-img-text">NO AVAILABLE IMAGE</div>
      }
      <Button handlesComparePopup={handlesComparePopup} />
    </div>
  );
}

export default Image;
