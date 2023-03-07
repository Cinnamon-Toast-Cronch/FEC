// og

import React from 'react';
import ImageThumbnails from './ImageThumbnails.jsx';
import GalleryList from './GalleryList.jsx';
import Zoom from './Zoom.jsx';
import expandIcon from '../../assets/images/expandIcon.svg';
import compressIcon from '../../assets/images/compressIcon.svg';

const { useState } = React;

function DefaultGallery({ photoUrls, thumbnailUrls }) {
  const [count, setCount] = useState(0);
  const photoAmount = photoUrls.length - 1;
  const [isExpanded, setExpandView] = useState(false);
  const [zoom, setZoom] = useState(false);

  const nextImage = () => {
    setCount(count === photoAmount ? 0 : count + 1);
  };

  const prevImage = () => {
    setCount(count === 0 ? photoAmount : count - 1);
  };

  const handleExpand = () => {
    document.querySelector('.product-info-column').style.display = 'none';
    const productColumn = document.querySelector('.product-image-column');
    productColumn.setAttribute('id', 'expanded');
    // document.querySelector('.product-image-column').style.width = '100%';
    document.querySelector('.product-image-column').style.flexDirection =
      'column-reverse';
    // document.querySelector('.product-image-column').style.flex = 1;
    document.querySelector('.gallery-slides').style.flexBasis = '100%';
    document.querySelector('.product-overview').style.visibility = 'hidden';
    document.querySelector('img#default.main-image').style.cursor = 'crosshair';
    setExpandView(true);
  };

  const handleCollaspe = () => {
    document.querySelector('.product-info-column').style.display = 'flex';
    const productColumn = document.querySelector('.product-image-column');
    productColumn.removeAttribute('id');
    document.querySelector('.product-image-column').style.flex = '0 0 55%';
    document.querySelector('.gallery-slides').style.flexBasis = '80%';
    document.querySelector('img#default.main-image').style.cursor = 'zoom-in';
    document.querySelector('.product-overview').style.visibility = 'visible';
    document.querySelector('.product-image-column').style.flexDirection = 'row';
    setExpandView(false);
    setZoom(false);
  };

  const handleZoom = () => {
    if (zoom) {
      document.querySelector('.expandButton').style.visibility = 'visible';
      setZoom(false);
    } else {
      document.querySelector('.compressButton').style.visibility = 'hidden';
      setZoom(true);
    }
  };

  return (
    <>
      {isExpanded ? (
        <ImageThumbnails
          thumbnailUrls={thumbnailUrls}
          count={count}
          photoUrls={photoUrls}
          handleSelectThumbnail={(num) => setCount(num)}
          isExpanded={isExpanded}
        />
      ) : null}
      <div className="default-gallery-container" id="default-gallery">
        {isExpanded ? null : (
          <ImageThumbnails
            thumbnailUrls={thumbnailUrls}
            count={count}
            photoUrls={photoUrls}
            handleSelectThumbnail={(num) => setCount(num)}
            isExpanded={isExpanded}
          />
        )}
        {count === 0 ? (
          <button
            className="gallery-left-arrow"
            type="button"
            onClick={prevImage}
            style={{ visibility: 'hidden' }}
          >
            &#10094;
          </button>
        ) : (
          <button
            className="gallery-left-arrow"
            type="button"
            onClick={prevImage}
          >
            &#10094;
          </button>
        )}

        {zoom ? (
          <Zoom
            imageUrl={photoUrls[count]}
            handleZoom={handleZoom}
            setZoom={setZoom}
            zoom={zoom}
          />
        ) : (
          <GalleryList
            photoUrls={photoUrls}
            count={count}
            handleExpand={handleExpand}
            isExpanded={isExpanded}
            setZoom={setZoom}
            handleZoom={handleZoom}
          />
        )}
        {isExpanded ? (
          <button
            className="compressButton"
            type="button"
            onClick={() => handleCollaspe()}
          >
            <img src={compressIcon} alt="compress-icon" />
          </button>
        ) : (
          <button
            className="expandButton"
            type="button"
            onClick={() => handleExpand()}
          >
            <img src={expandIcon} alt="expand-icon" />
          </button>
        )}
        {count === photoAmount ? (
          <button
            className="gallery-right-arrow"
            type="button"
            onClick={nextImage}
            style={{ visibility: 'hidden' }}
          >
            &#10095;
          </button>
        ) : (
          <button
            className="gallery-right-arrow"
            type="button"
            onClick={nextImage}
          >
            &#10095;
          </button>
        )}
      </div>
    </>
  );
}
export default DefaultGallery;
// end

//
{
  /* {isExpanded ? (
        <div className="expanded-gallery-container">
          <ImageThumbnails
            thumbnailUrls={thumbnailUrls}
            count={count}
            photoUrls={photoUrls}
            handleSelectThumbnail={(num) => setCount(num)}
            isExpanded={isExpanded}
          />

          <div className="expanded-carousel">
            {count === 0 ? (
              <button
                className="gallery-left-arrow"
                type="button"
                onClick={prevImage}
                style={{ visibility: 'hidden' }}
              >
                &#10094;
              </button>
            ) : (
              <button
                className="gallery-left-arrow"
                type="button"
                onClick={prevImage}
              >
                &#10094;
              </button>
            )}
            <GalleryList
              photoUrls={photoUrls}
              count={count}
              handleExpand={handleExpand}
              isExpanded={isExpanded}
              setZoom={setZoom}
            />
            {count === photoAmount ? (
              <button
                className="gallery-right-arrow"
                type="button"
                onClick={nextImage}
                style={{ visibility: 'hidden' }}
              >
                &#10095;
              </button>
            ) : (
              <button
                className="gallery-right-arrow"
                type="button"
                onClick={nextImage}
              >
                &#10095;
              </button>
            )}
          </div>
        </div>
      ) : ( */
}
