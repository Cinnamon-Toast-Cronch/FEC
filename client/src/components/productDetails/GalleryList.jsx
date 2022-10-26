import React from 'react';
import MainImage from './MainImage.jsx';

function GalleryList({
  photoUrls, count, isExpanded, setExpandView,
}) {
  if (photoUrls) {
    const expandImage = (imageId) => {
      const expandImg = document.getElementById(imageId);
      if (isExpanded) {
        // remove name
        expandImg.classList.remove('expand-image');
        setExpandView(false);
      } else {
        const setExpandGallery = document.querySelector('.product-image-column');
        setExpandGallery.style.width = '100%';
        const hideInfo = document.querySelector('.product-info-column');
        hideInfo.style.display = 'none';
        expandImg.classList.add('expand-image');
        setExpandView(true);
      }
    };
    return (
      <>
        {photoUrls.map((url, index) => {
          const key = url.split('-');
          return (
            <div
              className="gallery-slides"
              key={key[1]}
              id={key[1]}
              onClick={(e) => expandImage(key[1])}
            >
              {index === count && (
                <MainImage imageUrl={url} isExpanded={isExpanded} setExpandView={setExpandView} />
              )}
            </div>
          );
        })}
      </>
    );
  }
}

export default GalleryList;
