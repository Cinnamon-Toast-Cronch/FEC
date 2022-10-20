import React from 'react';

function MainImage({ imageUrl }) {
  //   -HOVER: mouse icon changes to magnifying glass
  // -CLICK on image -->  gallery changes to expanded view
  const mouseToMagGlass = () => {
    console.log('Hovering');
  };

  const expandView = () => {
    console.log('Expand View');
  };
  return (
    <div>
      <img src={imageUrl} alt="placeholder" onMouseOver={mouseToMagGlass} onClick={expandView} />
    </div>
  );
}
export default MainImage;
