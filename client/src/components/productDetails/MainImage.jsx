import React from 'react';

const { useState } = React;

function MainImage({ imageUrl, isExpanded, setExpandView }) {
  // -HOVER: mouse icon changes to magnifying glass
  // -CLICK on image -->  gallery changes to expanded view
  // have two imgs
  // default
  // click --> expand is true
  // expand
  // click --> zoom is true
  const [clickZoom, setClickZoom] = useState(false);
  // let initialCoord = {x: 0, y: 0};
  // const [coord, setCoords] = useState();
  // const [globalCoords, setGlobalCoords] = useState

  const handleZoom = () => {
    const zoomImg = document.querySelector('.zoom-image');
    zoomImg.addEventListener('mousemove', (e) => {
      zoomImg.style.setProperty('--x', `${-e.offsetX}px`);
      zoomImg.style.setProperty('--y', `${-e.offsetY}px`);
    });
  };

  if (isExpanded && !clickZoom) {
    return (
      <img
        className="main-image"
        id="expanded"
        src={imageUrl}
        alt="placeholder"
        // style={clickZoom ? { transform: 'scale(1.5)' } : null}
        onClick={() => setClickZoom(true)}
      />
    );
  }
  if (clickZoom) {
    return (
      <img
        className="zoom-image"
        id="zoom"
        // style={{ transform: 'scale(2.5)' }}
        style={{ backgroundImage: `url(${imageUrl})` }}
        onClick={() => setClickZoom(false)}
        onMouseMove={(e) => handleZoom(e)}
      />
    );
  }
  if (!isExpanded) {
    return (
      <img
        className="main-image"
        id="default"
        src={imageUrl}
        alt="placeholder"
        onClick={() => setExpandView(true)}
      />
    );
  }
}

export default MainImage;
// <div
//   style={{ backgroundImage: 'url("imageUrl")' }}
// />;
