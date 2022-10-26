import React from 'react';
import Button from './actionButton.jsx';
// import Cronch from '../../../../../assets/images/cronch.jpeg';

function Image({ images, handlesComparePopup }) {
  const image = images;
  return (
    <div className="related-image">
      <img className="img" src={image}></img>
      <Button handlesComparePopup={handlesComparePopup} />
    </div>
  );
}

export default Image;
