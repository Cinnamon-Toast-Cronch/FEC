import React from 'react';

function ThumbnailSpan({
  thumbnailUrls,
  range,
  count,
  handleSelectThumbnail,
  prevThumbnail,
  nextThumbnail,
}) {
  return (
    <div className="thumbnail-container dot">
      <button
        className="thumbnail-up-arrow dot"
        type="button"
        onClick={prevThumbnail}
        style={
          thumbnailUrls.length > 6 && range[0] > 0
            ? { visibility: 'visible' }
            : { visibility: 'hidden' }
        }
      >
        &#10094;
      </button>
      {thumbnailUrls.map((thumbnail, index) => (
        <div
          className="thumbnail-item dot"
          key={`thumbnail${index}`}
          style={
            index <= range[1] && index >= range[0]
              ? { display: 'flex' }
              : { display: 'none' }
          }
        >
          <span
            className={`${
              count === index ? 'active-thumbnail dot' : 'thumbnail dot'
            }`}
            onClick={() => {
              handleSelectThumbnail(index);
            }}
            alt="thumbnail"
          />
        </div>
      ))}
      <button
        className="thumbnail-down-arrow dot"
        type="button"
        onClick={nextThumbnail}
        style={
          thumbnailUrls.length > 6 && range[1] < thumbnailUrls.length - 1
            ? { visibility: 'visible' }
            : { visibility: 'hidden' }
        }
      >
        &#10094;
      </button>
    </div>
  );
}
export default ThumbnailSpan;
