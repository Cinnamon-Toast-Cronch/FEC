import React from 'react';
import MainImage from './MainImage.jsx';

function GalleryList({ photoUrls, count, isExpanded, setExpandView }) {
  if (photoUrls) {
    return (
      <>
        {photoUrls.map((url, index) => (
          <>
            {index === count && (
              <MainImage
                key={`gallery ${url}`}
                imageUrl={url}
                isExpanded={isExpanded}
                setExpandView={setExpandView}
              />
            )}
          </>
        ))}
      </>
    );
  }
}

export default GalleryList;
