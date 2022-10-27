import React from 'react';
import MainImage from './MainImage.jsx';
import ImageThumbnails from './ImageThumbnails.jsx';
import ArrowButtons from './ArrowButtons.jsx';
import GalleryList from './GalleryList.jsx';

const { useState, useEffect } = React;

function DefaultGallery({ photoUrls, thumbnailUrls }) {
  const [count, setCount] = useState(0);
  const photoAmount = photoUrls.length - 1;
  const [isExpanded, setExpandView] = useState(false);

  const nextImage = () => {
    setCount(count === length - 1 ? 0 : count + 1);
  };

  const prevImage = () => {
    setCount(count === 0 ? length - 1 : count - 1);
  };

  return (
    <div className="default-gallery-container" id="default-gallery">
      {isExpanded ? <button type="button" className="close-expand">&times;</button> : null}
      <ArrowButtons
        prevImage={prevImage}
        nextImage={nextImage}
        count={count}
        photoAmount={photoAmount}
      />
      <GalleryList
        photoUrls={photoUrls}
        count={count}
        isExpanded={isExpanded}
        setExpandView={setExpandView}
      />
      <ImageThumbnails
        thumbnailUrls={thumbnailUrls}
        count={count}
        photoUrls={photoUrls}
        handleSelectThumbnail={(num) => setCount(num)}
      />
    </div>
  );
}
export default DefaultGallery;
