import React from 'react';
import ImageCarousel from './ImageCarousel.jsx';
// import ImageThumbnails from './ImageThumbnails.jsx';
// import ImageArrowButtons from './ImageArrowButtons.jsx';

// NOTE: Please disregard this file, it should not have been pushed, but it was b/c it was created on the same branch.

const { useEffect, useState } = React;

function ImageGalleryDefault({ selectedStyle }) {
  const [mainImage, setMainImage] = useState('');
  const [currentPhotos, setCurrentPhotos] = useState([]);
  const [slideCounter, setSlideCounter] = useState(0);

  useEffect(() => {
    if (selectedStyle !== undefined) {
      setCurrentPhotos(selectedStyle.photos);
    }
  }, [selectedStyle]);

  // return (
  //   <div className="carousel">
  //     <div className="inner" style={{ transform: 'translateX(-0%)' }}>
  //       {React.Children.map(currentPhotos, (photo, index) => React.cloneElement(photo, { width: '100%' }))}
  //       <div className="carousel-item" style={{ width }}>{currentPhotos}</div>
  //     </div>
  //   </div>
  // );

  // return (
  //   <div>
  //     <MainImage photos={currentPhotos} setMainImage={setMainImage} mainImage={mainImage} />
  //     <ImageThumbnails photos={currentPhotos} />
  //     <ImageArrowButtons photos={currentPhotos} />
  //   </div>
  // );
}
export default ImageGalleryDefault;
