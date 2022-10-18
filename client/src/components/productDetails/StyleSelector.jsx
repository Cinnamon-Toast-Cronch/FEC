import React from 'react';

const { useState, useEffect } = React;

function StyleSelector({ styles, setSelectedStyle, selectedStyle }) {
  // const [selectedStyle, setSelectedStyle] = useState({});

  // useEffect(() => {
  //   setSelectedStyle(styles[0]);
  // }, [styles]);

  const handleStyle = (style) => {
    setSelectedStyle(style);
  };

 console.log('selectedStyle', selectedStyle)
  return (
    <div className="stylesContainer">
      <div className="selectedStyle">
        <p>Style > {selectedStyle ? selectedStyle.name : null}</p>
        <div className="styleThumbnails">
          {styles.map((style) => <input type="image" key={style.style_id} onClick={(e) => handleStyle(style)} alt={style.name} src={style.photos[0].thumbnail_url}></input>)}
        </div>
      </div>
    </div>
    // <AddToCartButton/>
    // <QuantitySelector/>
    // <SizeSelector/>


  );
}

export default StyleSelector;
