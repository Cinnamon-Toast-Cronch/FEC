import React from 'react';

const { useState, useEffect } = React;

function StyleSelector({ styles }) {
  const [selectedStyle, setSelectedStyle] = useState({});

  useEffect(() => {
    setSelectedStyle(styles[0]);
  }, [styles]);

  const handleStyle = (e) => {
    console.log(e.target.value)
    //onClick of thumbnail --> rerender
  };

  return (
    <div className="stylesContainer">
      <div className="selectedStyle">
        <p>Style > {selectedStyle ? selectedStyle.name : null}</p>
        <div className="styleThumbnails">
          {styles.map((style) => <input type="image" key={style.style_id} className="button" value={style} onClick={handleStyle} alt={style.name} src={style.photos[0].thumbnail_url}></input>)}
        </div>
      </div>
    </div>


  );
}

export default StyleSelector;
