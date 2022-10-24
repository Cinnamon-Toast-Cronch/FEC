import React from 'react';
// import leftArrow from '../../assets/images/arrowIcons/leftArrow.svg';
// import rightArrow from '../../assets/images/arrowIcons/rightArrow.svg';

function ArrowButtons({
  count, prevImage, nextImage, photoAmount,
}) {
  return (
    <>
      {count === 0 ? null : (
        <button className="left-arrow" type="button" onClick={prevImage}>
          &#10094;
        </button>
      )}

      {count === photoAmount ? null : (
        <button className="right-arrow" type="button" onClick={nextImage}>
          &#10095;
        </button>
      )}
    </>
  );
}

export default ArrowButtons;
// import React from 'react';
// import leftArrow from '../../assets/images/arrowIcons/leftArrow.svg';
// import rightArrow from '../../assets/images/arrowIcons/rightArrow.svg';

// function ArrowButtons({
//   count, prevImage, nextImage, photoAmount,
// }) {
//   return (
//     <>
//       {count === 0 ? null : (
//         <button className="left-arrow" type="button" onClick={prevImage}>
//           <img
//             className="left-arrow-icon"
//             src={leftArrow}
//             alt="left arrow"
//             height="20"
//             width="20"
//           />
//         </button>
//       )}

//       {count === photoAmount ? null : (
//         <button className="right-arrow" type="button" onClick={nextImage}>
//           <img
//             className="right-arrow-icon"
//             src={rightArrow}
//             alt="right arrow"
//             height="20"
//             width="20"
//           />
//         </button>
//       )}
//     </>
//   );
// }

// export default ArrowButtons;
