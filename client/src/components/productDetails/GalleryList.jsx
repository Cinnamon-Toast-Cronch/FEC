import React from 'react';

function GalleryList({ photoUrls, count, handleExpand }) {
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
                onClick={() => handleExpand()}
                style={
                  index === count ? { display: 'flex' } : { display: 'none' }
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
