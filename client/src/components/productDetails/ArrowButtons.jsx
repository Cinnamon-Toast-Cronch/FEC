import React from 'react';

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
