import React from 'react';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';
import Checkmark from '../../assets/images/checkmark.svg';

const { useState, useEffect } = React;

function StyleSelector({
  styles, setSelectedStyle, selectedStyle, setStyles,
}) {
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
    <div>
      <div className="stylesContainer">
        <SizeSelector selectedStyle={selectedStyle} />
        <p className="selectedStyle">
          {selectedStyle ? selectedStyle.name : null}
        </p>
        <div className="style-thumbnail-row">

          {styles.map((style, index) => (
            <div className="style-thumbnail-column">
              <div className="style-image-container">
                <input
                  className={`${index === 0 ? 'active-style-image' : 'style-image'}`}
                  type="image"
                  key={style.name}
                  value={index}
                  onClick={(e) => handleStyle(style, e)}
                  alt={style.name}
                  src={style.photos[0].thumbnail_url}
                />
                {index === 0 ? (
                  <img
                    className="style-checkmark"
                    src={Checkmark}
                    alt="checkmark"
                  />
                ) : null}
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>

  );
}

export default StyleSelector;
