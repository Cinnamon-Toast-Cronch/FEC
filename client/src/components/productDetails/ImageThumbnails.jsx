import React from 'react';

const { useState } = React;

function ImageThumbnails({
  thumbnailUrls, photoUrls, count, handleSelectThumbnail,
}) {
  const [lastThumbnail, setLastThumbnail] = useState(7);
  const thumbnailLength = thumbnailUrls.length;

  const nextThumbnail = () => {
    setLastThumbnail(lastThumbnail === thumbnailLength + 6 ? 0 : lastThumbnail + 1);
  };

  const prevThumbnail = () => {
    setLastThumbnail(lastThumbnail === 0 ? thumbnailLength - 1 : lastThumbnail - 1);
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
            {lastThumbnail > index && index >= lastThumbnail - 7 ? <img src={thumbnail} alt="placeholder" /> : null}

          </div>
        ))}
      </div>
      {thumbnailUrls.length > 6 && lastThumbnail !== 6 ? <button type="button" onClick={prevThumbnail}>TB Previous</button> : null}
      {thumbnailUrls.length > 6 && lastThumbnail !== thumbnailUrls.length ? <button type="button" onClick={nextThumbnail}>TB Next</button> : null }
    </div>
  );
}
export default ImageThumbnails;
