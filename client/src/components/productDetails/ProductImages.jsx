import React from 'react';
import DefaultGallery from './DefaultGallery.jsx';

const { useEffect, useState } = React;

function ProductImages({ selectedStyle }) {
  const [currentPhotos, setCurrentPhotos] = useState([]);

  useEffect(() => {
    if (selectedStyle) {
      setCurrentPhotos(selectedStyle.photos);
    }
  }, [selectedStyle]);

  if (currentPhotos) {
    // iterate thru array of objs to make 2 arrays for thumbnails and urls
    const thumbnailUrls = currentPhotos.map((photo) => photo.thumbnail_url);
    const photoUrls = currentPhotos.map((photo) => photo.url);

    return (
      <div className="image-wrapper-content">
        <DefaultGallery photoUrls={photoUrls} thumbnailUrls={thumbnailUrls} />
      </div>
    );
  }
  return null;
}

export default ProductImages;
