import React from 'react';

function MainImage({ imageUrl, isExpanded, setExpandView }) {
  //   -HOVER: mouse icon changes to magnifying glass
  // -CLICK on image -->  gallery changes to expanded view

  // const expandImage = () => {
  //   if (isExpanded) {
  //     setExpandView(false);
  //   } else {
  //     const setExpandImg = document.querySelector('.product-image-column');
  //     setExpandImg.style.width = '100%';
  //     const hideInfo = document.querySelector('.product-info-column');
  //     hideInfo.style.display = 'none';
  //     setExpandView(true);
  //   }

  return (
    <img
      className="main-image"
      src={imageUrl}
      alt="placeholder"
      style={{ width: '100%' }}
    />
  );
}

export default MainImage;
