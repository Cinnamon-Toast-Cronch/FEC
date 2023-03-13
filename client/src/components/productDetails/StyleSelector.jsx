import React from 'react';

function StyleSelector({ styles, setSelectedStyle, selectedStyle, setStyles }) {
  const handleStyle = (style, e) => {
    const styleIndex = e.target.value;
    const stylesArr = styles;
    stylesArr.splice(styleIndex, 1);
    stylesArr.unshift(style);
    setStyles(stylesArr);
    setSelectedStyle(style);
  };

  return (
    <div className="styles-container">
      <p className="style-title">
        Style
        <span>{selectedStyle.name}</span>
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
    </div>
  );
}

export default StyleSelector;
