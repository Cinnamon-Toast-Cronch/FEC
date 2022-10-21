import React from 'react';

const { useState, useEffect } = React;

function ImageThumbnails({ thumbnailUrls, count, handleSelectThumbnail }) {
  const [range, setRange] = useState([0, 6]);
  const thumbnailLength = thumbnailUrls.length;
  useEffect(() => {
    if (thumbnailLength - 1 <= 6) {
      setRange([0, thumbnailLength - 1]);
    } else {
      const endpoint = count + 6;
      if (endpoint >= thumbnailLength - 1) {
        setRange([count - 6, count]);
      } else {
        setRange([count, count + 6]);
      }
    }
  }, [count]);

  const prevThumbnail = () => {
    setRange(range[0] === 0 ? range : [range[0] - 1, range[1] - 1]);
  };
  const nextThumbnail = () => {
    setRange(range[1] === thumbnailLength - 1 ? range : [range[0] + 1, range[1] + 1]);
  };

  return (
    <div>
      <div className="image-thumbnails">
        {thumbnailUrls.map((thumbnail, index) => (
          <div
            key={index}
            className={`${count === index ? 'active-thumbnail' : 'thumbnail'}`}
            onClick={() => handleSelectThumbnail(index)}
          >
            {index <= range[1] && index >= range[0] ? <img src={thumbnail} alt="placeholder" /> : null}
          </div>
        ))}
      </div>
      {thumbnailUrls.length > 6 && range[0] > 0 ? <button type="button" onClick={prevThumbnail}>TB Previous</button> : null}
      {thumbnailUrls.length > 6 && range[1] < thumbnailUrls.length - 1 ? <button type="button" onClick={nextThumbnail}>TB Next</button> : null }
    </div>
  );
}
export default ImageThumbnails;

// const setThumbRange = (selectThumbIndex, currentIndex) => {
//   // 3 is range.. replace w/ 7
//   if (thumbnailLength <= 3) {
//     return true;
//   }
//   // replace 2 w/ 6
//   const amount = 2;

//   // start = 0
//   let start = selectThumbIndex;
//   // end = 2 + 0 = 2
//   let end = amount + selectThumbIndex;
//   // check last index = 5
//   const lastIndex = thumbnailLength - 1;
//   // 5 - 2 = 3 //5- 6 = 1
//   const difference = Math.abs(lastIndex - end);
//   if (end > lastIndex) {
//     // 2 - 1 = start at index 1
//     start = Math.abs(start - difference);
//     end = Math.abs(end - difference);
//   }
//   if (currentIndex >= start && currentIndex <= end) {
//     return true;
//   }
// };
