import React from 'react';

function GalleryList({
  photoUrls,
  count,
  handleExpand,
  isExpanded,
  setZoom,
  handleZoom,
}) {
  if (photoUrls) {
    return (
      <div className="gallery-slides-container">
        {photoUrls.map((url, index) => (
          <div
            className="gallery-slides"
            key={`gallery ${url}`}
            style={index === count ? { display: 'flex' } : { display: 'none' }}
          >
            {/* <div className="main-image-container"> */}
            <img
              className="main-image"
              id="default"
              src={url}
              alt="main product image"
              onClick={() => (isExpanded ? setZoom(true) : handleExpand())}
              // style={
              //   index === count ? { display: 'flex' } : { display: 'none' }
              // }
            />
          </div>
          // </div>
        ))}
      </div>
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

// lazy
// import React, { useEffect, useRef } from 'react';

// function GalleryList({ photoUrls, count, handleExpand, isExpanded, setZoom }) {
//   const imageRefs = useRef([]);
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const image = entry.target;
//             const { src } = image.dataset;
//             image.src = src;
//             observer.unobserve(image);
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     imageRefs.current.forEach((image) => {
//       observer.observe(image);
//     });

//     return () => {
//       observer.disconnect();
//     };
//   }, [photoUrls]);
//   if (photoUrls) {
//     return (
//       <>
//         {photoUrls.map((url, index) => (
//           <div className="gallery-slides" key={`gallery ${url}`}>
//             <div className="main-image-container">
//               <img
//                 ref={(image) => (imageRefs.current[index] = image)}
//                 className="main-image"
//                 id="default"
//                 src="https://image-placeholder.com/images/actual-size/375x500.png"
//                 alt="product image"
//                 data-src={url}
//                 onClick={() => (isExpanded ? setZoom(true) : handleExpand())}
//                 style={
//                   index === count ? { display: 'flex' } : { display: 'none' }
//                   // index === count
//                   //   ? { visibility: 'visible' }
//                   //   : { visibility: 'hidden' }
//                 }
//               />
//             </div>
//           </div>
//         ))}
//       </>
//     );
//   }
// }

// export default GalleryList;
// end lazy
