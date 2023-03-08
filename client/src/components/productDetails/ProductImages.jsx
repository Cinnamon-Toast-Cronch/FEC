import React, { useEffect, useState } from 'react';
import DefaultGallery from './DefaultGallery.jsx';

function ProductImages({ selectedStyle }) {
  const [thumbnailUrls, setThumbnailUrls] = useState([]);
  const [photoUrls, setPhotoUrls] = useState([]);

  useEffect(() => {
    const currentPhotos = selectedStyle.photos;
    const thumbnails = currentPhotos.map((photo) => photo.thumbnail_url);
    const urls = currentPhotos.map((photo) => photo.url);
    setThumbnailUrls(thumbnails);
    setPhotoUrls(urls);
  }, [selectedStyle]);
  return <DefaultGallery photoUrls={photoUrls} thumbnailUrls={thumbnailUrls} />;
}

export default ProductImages;
