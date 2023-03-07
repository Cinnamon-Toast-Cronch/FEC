import React, { useState, useEffect, useRef } from 'react';

function ImageThumbnails({
  thumbnailUrls,
  count,
  handleSelectThumbnail,
  isExpanded,
}) {
  const [range, setRange] = useState([0, 6]);

  if (thumbnailUrls) {
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
      setRange(
        range[1] === thumbnailLength - 1 ? range : [range[0] + 1, range[1] + 1]
      );
    };

    return (
      <div
        className={
          isExpanded ? 'thumbnail-container dot' : 'thumbnail-container'
        }
        // className="thumbnail-container"
      >
        {thumbnailUrls.length > 6 && range[0] > 0 ? (
          <button
            // className="thumbnail-up-arrow"
            className={
              isExpanded ? 'thumbnail-up-arrow dot' : 'thumbnail-up-arrow'
            }
            type="button"
            onClick={prevThumbnail}
            style={{ visibility: 'visible' }}
          >
            &#10094;
          </button>
        ) : (
          <button
            // className="thumbnail-up-arrow"
            className={
              isExpanded ? 'thumbnail-up-arrow dot' : 'thumbnail-up-arrow'
            }
            type="button"
            onClick={prevThumbnail}
            style={{ visibility: 'hidden' }}
          >
            &#10094;
          </button>
        )}

        {isExpanded
          ? thumbnailUrls.map((thumbnail, index) => (
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
            ))
          : thumbnailUrls.map((thumbnail, index) => (
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
                  className={`${
                    count === index ? 'active-thumbnail' : 'thumbnail'
                  }`}
                  src={thumbnail}
                  onClick={() => {
                    handleSelectThumbnail(index);
                  }}
                  alt="thumbnail"
                />
              </div>
            ))}
        {thumbnailUrls.length > 6 && range[1] < thumbnailUrls.length - 1 ? (
          <button
            className={
              isExpanded ? 'thumbnail-down-arrow dot' : 'thumbnail-down-arrow'
            }
            type="button"
            onClick={nextThumbnail}
            style={{ visibility: 'visible' }}
          >
            &#10094;
          </button>
        ) : (
          <button
            className={
              isExpanded ? 'thumbnail-down-arrow dot' : 'thumbnail-down-arrow'
            }
            type="button"
            onClick={nextThumbnail}
            style={{ visibility: 'hidden' }}
          >
            &#10094;
          </button>
        )}
      </div>
    );
  }
}
export default ImageThumbnails;
