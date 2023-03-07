import React, { useEffect, useState } from 'react';
import DefaultGallery from './DefaultGallery.jsx';

function ProductImages({ selectedStyle }) {
  const [currentPhotos, setCurrentPhotos] = useState([]);

  useEffect(() => {
    if (selectedStyle) {
      setCurrentPhotos(selectedStyle.photos);
    }
  }, [selectedStyle]);

  if (currentPhotos) {
    const thumbnailUrls = currentPhotos.map((photo) => photo.thumbnail_url);
    const photoUrls = currentPhotos.map((photo) => photo.url);

    return (
      <DefaultGallery photoUrls={photoUrls} thumbnailUrls={thumbnailUrls} />
    );
  }
  return null;
}

export default ProductImages;
