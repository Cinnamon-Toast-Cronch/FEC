import React from 'react';
import upArrow from '../../assets/images/arrowIcons/upArrow.svg';
import downArrow from '../../assets/images/arrowIcons/downArrow.svg';

const { useState, useEffect } = React;

function ImageThumbnails({ thumbnailUrls, count, handleSelectThumbnail }) {
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
      setRange(range[1] === thumbnailLength - 1 ? range : [range[0] + 1, range[1] + 1]);
    };

    return (
      <div className="thumbnail-container">
        {thumbnailUrls.length > 6 && range[0] > 0 ? (
          <button
            className="thumbnail-up-arrow"
            type="button"
            onClick={prevThumbnail}
          >
            <img
              className="thumbnail-up-arrow"
              src={upArrow}
              alt="upward arrow"
              height="50"
              width="50"
            />
          </button>
        ) : null}
        <div className="thumbnail-row">
          {thumbnailUrls.map((thumbnail, index) => (
            <div className="thumbnail-column" key={index}>
              {index <= range[1] && index >= range[0] ? (
                <span className="thumbnail-image-container">
                  <img
                    className={`${count === index ? 'active-thumbnail' : 'thumbnail'}`}
                    src={thumbnail}
                    onClick={() => {
                      handleSelectThumbnail(index);
                      console.log('index', index);
                    }}
                    style={{ width: '40px' }}
                    alt="placeholder"
                  />
                </span>
              ) : null}
            </div>
          ))}
        </div>

        {thumbnailUrls.length > 6 && range[1] < thumbnailUrls.length - 1 ? (
          <button
            className="thumbnail-down-arrow"
            type="button"
            onClick={nextThumbnail}
          >
            <img
              className="thumbnail-down-arrow"
              src={downArrow}
              alt="downward arrow"
              height="20"
              width="20"
            />
          </button>
        ) : null }
      </div>
    );
  }
}
export default ImageThumbnails;
