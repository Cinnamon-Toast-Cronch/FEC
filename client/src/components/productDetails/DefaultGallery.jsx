import React from 'react';
import ReactDOM from 'react-dom';
import ImageThumbnails from './ImageThumbnails.jsx';
import GalleryList from './GalleryList.jsx';
import ExpandImageModal from './ExpandImageModal.jsx';

const { useState } = React;

function DefaultGallery({ photoUrls, thumbnailUrls }) {
  const [count, setCount] = useState(0);
  const photoAmount = photoUrls.length - 1;
  const [isExpanded, setExpandView] = useState(false);

  const nextImage = () => {
    setCount(count === photoAmount ? 0 : count + 1);
  };

  const prevImage = () => {
    setCount(count === 0 ? photoAmount : count - 1);
  };

  const galleryContents = (
    <>
      {count === 0 ? null : (
        <button
          className="gallery-left-arrow"
          type="button"
          onClick={prevImage}
        >
          &#10094;
        </button>
      )}
      <ImageThumbnails
        thumbnailUrls={thumbnailUrls}
        count={count}
        photoUrls={photoUrls}
        handleSelectThumbnail={(num) => setCount(num)}
      />

      <GalleryList
        photoUrls={photoUrls}
        count={count}
        isExpanded={isExpanded}
        setExpandView={setExpandView}
      />
      {count === photoAmount ? null : (
        <button
          className="gallery-right-arrow"
          type="button"
          onClick={nextImage}
        >
          &#10095;
        </button>
      )}
    </>
  );
  const expandImageModal = (
    <ExpandImageModal>
      <div className="expand-image-container">
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
      </div>
    </ExpandImageModal>
  );

  return (
    <>
      {isExpanded ? (
        ReactDOM.createPortal(expandImageModal, document.body)
      ) : (
        <div className="default-gallery-container" id="default-gallery">
          {galleryContents}
        </div>
      )}
    </>
  );
}
export default DefaultGallery;
