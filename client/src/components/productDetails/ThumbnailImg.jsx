import React from 'react';

function ThumbnailImg({ thumbnailUrls, range, count, handleSelectThumbnail }) {
  return (
    <div className="thumbnail-container ">
      {thumbnailUrls.map((thumbnail, index) => (
        <div
          className="thumbnail-item"
          key={`thumbnail${index}`}
          style={
            index <= range[1] && index >= range[0]
              ? { display: 'flex' }
              : { display: 'none' }
          }
        >
          <img
            className={`${count === index ? 'active-thumbnail' : 'thumbnail'}`}
            src={thumbnail}
            onClick={() => {
              handleSelectThumbnail(index);
            }}
            alt="thumbnail"
          />
        </div>
      ))}
    </div>
  );
}
export default ThumbnailImg;
