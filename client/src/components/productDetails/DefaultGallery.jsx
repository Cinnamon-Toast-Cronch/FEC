import React from 'react';
import ReactDOM from 'react-dom';
import MainImage from './MainImage.jsx';
import ImageThumbnails from './ImageThumbnails.jsx';
import ArrowButtons from './ArrowButtons.jsx';
import GalleryList from './GalleryList.jsx';
import ExpandImageModal from './ExpandImageModal.jsx';

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
  const galleryContents = (
    <>
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
    </>
  );
  const expandImageModal = (
    <ExpandImageModal>
      <div className="expand-image-modal">
        <button
          type="button"
          className="close-expand"
          onClick={() => setExpandView(false)}
        >
          &times;
        </button>
        {galleryContents}
      </div>
    </ExpandImageModal>
  );

  return (
    <>
      {isExpanded ? ReactDOM.createPortal(expandImageModal, document.body)
        : (
          <div className="default-gallery-container" id="default-gallery">
            {galleryContents}
          </div>
        )}
    </>
  );
}
export default DefaultGallery;
