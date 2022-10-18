import React from 'react';

const { useState, useEffect } = React;

// NOTE: PLEASE DISREGARD THIS FILE! Should not have been pushed, not complete.

function ImageCarousel({ photos, setMainImage, mainImage }) {
  if (photos) {
    useEffect(() => {
      setMainImage(photos[0]);
    }, [photos]);
  }

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
