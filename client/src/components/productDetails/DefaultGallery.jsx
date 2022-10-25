import React from 'react';
import MainImage from './MainImage.jsx';
import ImageThumbnails from './ImageThumbnails.jsx';
import ArrowButtons from './ArrowButtons.jsx';
import GalleryList from './GalleryList.jsx';
import ExpandedGallery from './ExpandedGallery.jsx';

const { useState, useEffect } = React;

function DefaultGallery({ photoUrls, thumbnailUrls }) {
  const [count, setCount] = useState(0);
  const photoAmount = photoUrls.length - 1;
  const [isExpanded, setExpandView] = useState(false);

  // const handleExpansion = (imgSrc) => {
  //   setExpandView(true);
  //   // const modal = document.createElement('div');
  //   // modal.setAttribute('class', 'modal');
  //   // document.querySelector('.product-details-container').append(modal);
  //   // const newImage = document.createElement('img');
  //   // newImage.setAttribute('src', imgSrc);
  //   // modal.append(newImage);
  //   // const setExpandImg = document.querySelector('.product-image-column');
  //   // setModal.style.width = '100%';
  //   // const hideInfo = document.querySelector('.product-info-column');
  //   // hideInfo.style.display = 'none';
  // };

  // left and right arrow controls
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
      <GalleryList photoUrls={photoUrls} count={count} isExpanded={isExpanded} setExpandView={setExpandView} />
      <ImageThumbnails
        thumbnailUrls={thumbnailUrls}
        count={count}
        photoUrls={photoUrls}
        handleSelectThumbnail={(count) => setCount(count)}
      />
    </div>
  );
}
export default DefaultGallery;
