import React from 'react';

const { useState } = React;

function MainImage({ imageUrl, isExpanded, setExpandView }) {
  const [clickZoom, setClickZoom] = useState(false);

  se;
  if (isExpanded && !clickZoom) {
    return (
      <img
        className="main-image"
        id="expanded"
        src={imageUrl}
        alt="placeholder"
        onClick={() => setClickZoom(true)}
      />
    );
  }
  if (clickZoom) {
    return (
      <img
        className="zoom-image"
        id="zoom"
        style={{ backgroundImage: `url(${imageUrl})` }}
        onClick={() => setClickZoom(false)}
        onMouseMove={(e) => handleZoom(e)}
      />
    );
  }

  if (!isExpanded) {
    return (
      <div className="main-image-container">
        <img
          className="main-image"
          id="default"
          src={imageUrl}
          alt="placeholder"
          onClick={() => setExpandView(true)}
        />
      </div>
    );
  }
}

export default MainImage;
