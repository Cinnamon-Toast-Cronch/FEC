import React from 'react';
import ReactDOM from 'react-dom';
import ImageThumbnails from './ImageThumbnails.jsx';
import GalleryList from './GalleryList.jsx';
import ExpandImageModal from './ExpandImageModal.jsx';
import expandIcon from '../../assets/images/expandIcon.svg';

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

  const handleExpand = () => {
    document.querySelector('.product-info-column').style.display = 'none';
    document.querySelector('.product-image-column').style.width = '100%';
    setExpandView(true);
  };

  const handleCollaspe = () => {
    document.querySelector('.product-info-column').style.display = 'flex';
    document.querySelector('.product-image-column').style.width = '60%%';
    setExpandView(false);
  };
  return (
    <div className="default-gallery-container" id="default-gallery">
      <ImageThumbnails
        thumbnailUrls={thumbnailUrls}
        count={count}
        photoUrls={photoUrls}
        handleSelectThumbnail={(num) => setCount(num)}
      />
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
      />
      <button
        className="expandButton"
        onClick={() => (isExpanded ? handleCollaspe() : handleExpand())}
      >
        <img src={expandIcon} alt="expand-icon" />
      </button>
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
  );
}
export default DefaultGallery;

// OG
// import React from 'react';
// import ReactDOM from 'react-dom';
// import ImageThumbnails from './ImageThumbnails.jsx';
// import GalleryList from './GalleryList.jsx';
// import ExpandImageModal from './ExpandImageModal.jsx';

// const { useState } = React;

// function DefaultGallery({ photoUrls, thumbnailUrls }) {
//   const [count, setCount] = useState(0);
//   const photoAmount = photoUrls.length - 1;
//   const [isExpanded, setExpandView] = useState(false);

//   const nextImage = () => {
//     setCount(count === photoAmount ? 0 : count + 1);
//   };

//   const prevImage = () => {
//     setCount(count === 0 ? photoAmount : count - 1);
//   };

//   const galleryContents = (
//     <>
//       <ImageThumbnails
//         thumbnailUrls={thumbnailUrls}
//         count={count}
//         photoUrls={photoUrls}
//         handleSelectThumbnail={(num) => setCount(num)}
//       />
//       {count === 0 ? (
//         <button
//           className="gallery-left-arrow"
//           type="button"
//           onClick={prevImage}
//           style={{ visibility: 'hidden' }}
//         >
//           &#10094;
//         </button>
//       ) : (
//         <button
//           className="gallery-left-arrow"
//           type="button"
//           onClick={prevImage}
//         >
//           &#10094;
//         </button>
//       )}

//       <GalleryList
//         photoUrls={photoUrls}
//         count={count}
//         isExpanded={isExpanded}
//         setExpandView={setExpandView}
//       />
//       {count === photoAmount ? (
//         <button
//           className="gallery-right-arrow"
//           type="button"
//           onClick={nextImage}
//           style={{ visibility: 'hidden' }}
//         >
//           &#10095;
//         </button>
//       ) : (
//         <button
//           className="gallery-right-arrow"
//           type="button"
//           onClick={nextImage}
//         >
//           &#10095;
//         </button>
//       )}
//     </>
//   );
//   const expandImageModal = (
//     <ExpandImageModal>
//       <div className="expand-image-container">
//         <div className="expand-image-modal">
//           <button
//             type="button"
//             className="close-expand"
//             onClick={() => setExpandView(false)}
//           >
//             &times;
//           </button>
//           {galleryContents}
//         </div>
//       </div>
//     </ExpandImageModal>
//   );

//   return (
//     <>
//       {isExpanded ? (
//         ReactDOM.createPortal(expandImageModal, document.body)
//       ) : (
//         <div className="default-gallery-container" id="default-gallery">
//           {galleryContents}
//         </div>
//       )}
//     </>
//   );
// }
// export default DefaultGallery;
