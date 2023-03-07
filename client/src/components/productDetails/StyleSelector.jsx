import React from 'react';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';

const { useState, useEffect } = React;

function StyleSelector({ styles, setSelectedStyle, selectedStyle, setStyles }) {
  useEffect(() => {
    setSelectedStyle(styles[0]);
  }, [styles]);

  const handleStyle = (style, e) => {
    const styleIndex = e.target.value;
    const stylesArr = styles;
    stylesArr.splice(styleIndex, 1);
    stylesArr.unshift(style);
    setStyles(stylesArr);
    setSelectedStyle(style);
  };

  return (
    // <div>
    <div className="styles-container">
      <p className="style-title">
        Style
        <span>{selectedStyle ? selectedStyle.name : null}</span>
      </p>
      <div className="style-thumbnail-container">
        {styles.map((style, index) => (
          <div className="style-image-container" key={style.name}>
            <input
              className={`${
                index === 0 ? 'active-style-image' : 'style-image'
              }`}
              type="image"
              key={style.name}
              value={index}
              onClick={(e) => handleStyle(style, e)}
              alt={style.name}
              src={style.photos[0].thumbnail_url}
            />
            {index === 0 ? <div className="currStyle">&#10003;</div> : null}
          </div>
        ))}
      </div>
      <SizeSelector selectedStyle={selectedStyle} />
    </div>
  );
}

export default StyleSelector;
