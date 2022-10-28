import React from 'react';
import MainImage from './MainImage.jsx';

function GalleryList({
  photoUrls, count, isExpanded, setExpandView,
}) {
  if (photoUrls) {
    return (
      <>
        {photoUrls.map((url, index) => {
          const key = url.split('-');
          return (
            <div
              className="gallery-slides"
              key={key[1]}
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
