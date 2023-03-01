import React from 'react';
import MainImage from './MainImage.jsx';

function GalleryList({ photoUrls, count, isExpanded, setExpandView }) {
  if (photoUrls) {
    return (
      <>
        {photoUrls.map((url, index) => (
          <div className="gallery-slides" key={`gallery ${url}`}>
            <div className="main-image-container">
              <img
                className="main-image"
                id="default"
                src={url}
                alt="placeholder"
                onClick={() => setExpandView(true)}
                style={
                  index === count ? { display: 'block' } : { display: 'none' }
                }
              />
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default GalleryList;

// OG

// function GalleryList({ photoUrls, count, isExpanded, setExpandView }) {
//   if (photoUrls) {
//     return (
//       <>
//         {photoUrls.map((url, index) => (
//           <div className="gallery-slides" key={`gallery ${url}`}>
//             {index === count && (
//               <MainImage
//                 imageUrl={url}
//                 isExpanded={isExpanded}
//                 setExpandView={setExpandView}
//               />
//             )}
//           </div>
//         ))}
//       </>
//     );
//   }
// }

// export default GalleryList;
// //end OG

// function GalleryList({ photoUrls, count, isExpanded, setExpandView }) {
//   if (photoUrls) {
//     return (
//       <div className="carousel">
//         <div className="gallery-slides">
//           {photoUrls.map((url, index) => (
//             <div
//               className={index === count ? 'slide active' : 'slide'}
//               key={`gallery ${url}`}
//             >
//               <img src={url} alt="placeholder" />
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }
// export default GalleryList;
