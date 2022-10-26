import React from 'react';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';

const { useState, useEffect } = React;

function StyleSelector({ styles, setSelectedStyle, selectedStyle }) {
  // Note: will implement overlay of a checkmark on selected style thumbnail functionality with CSS.

  useEffect(() => {
    setSelectedStyle(styles[0]);
  }, [styles]);

  const handleStyle = (style) => {
    setSelectedStyle(style);
  };

  return (
    <div>
      <div className="stylesContainer">
        <SizeSelector selectedStyle={selectedStyle} />
        <p className="selectedStyle">
          {selectedStyle ? selectedStyle.name : null}
        </p>
        <div className="styleThumbnails">
          {styles.map((style) => <input className="style-image" type="image" key={style.style_id} onClick={(e) => handleStyle(style)} alt={style.name} src={style.photos[0].thumbnail_url} />)}
        </div>
      </div>
    </div>

  );
}

export default StyleSelector;
