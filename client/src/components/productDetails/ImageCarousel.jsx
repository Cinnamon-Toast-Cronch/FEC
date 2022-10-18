import React from 'react';

const { useState, useEffect } = React;

function ImageCarousel({ photos, setMainImage, mainImage }) {
  if (photos) {
    useEffect(() => {
      setMainImage(photos[0]);
    }, [photos]);
  }
  console.log(mainImage);
  if (mainImage) {
    return (
      <div>
        <img src={mainImage.url} alt={mainImage.url} />
      </div>
    );
  }
  return (
    <div>Main Image</div>
  );
}
export default ImageCarousel;
