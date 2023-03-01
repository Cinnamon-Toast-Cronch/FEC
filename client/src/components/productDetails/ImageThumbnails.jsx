import React, { useState, useEffect, useRef } from 'react';

function ImageThumbnails({ thumbnailUrls, count, handleSelectThumbnail }) {
  const [range, setRange] = useState([0, 6]);
  // const [loadedThumbnails, setLoadedThumbnails] = useState([]);

  // const observer = useRef(null);

  // const thumbnailRefs = useRef(
  //   Array(thumbnailUrls.length)
  //     .fill()
  //     .map((_, i) => ({ ref: React.createRef(), index: i }))
  // );
  // useEffect(() => {
  //   // Create a new IntersectionObserver instance
  //   observer.current = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           // Set the src attribute of the <img> tag to the data-src attribute
  //           const img = entry.target.firstChild;
  //           img.src = img.dataset.src;

  //           // Update the loadedThumbnails state
  //           const { index } = thumbnailRefs.current.find(
  //             (ref) => ref.ref.current === entry.target
  //           );
  //           setLoadedThumbnails((prevState) => [...prevState, index]);
  //         }
  //       });
  //     },
  //     { threshold: 0.5 }
  //   );

  //   // Observe each thumbnail ref
  //   thumbnailRefs.current.forEach((ref) => {
  //     observer.current.observe(ref.ref.current);
  //   });

  //   // Cleanup function to disconnect the IntersectionObserver instance
  //   return () => {
  //     if (observer.current) {
  //       observer.current.disconnect();
  //     }
  //   };
  // }, []);
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
      <div className="thumbnail-container">
        {thumbnailUrls.length > 6 && range[0] > 0 ? (
          <button
            className="thumbnail-up-arrow"
            type="button"
            onClick={prevThumbnail}
          >
            &#10094;
          </button>
        ) : (
          <button
            className="thumbnail-up-arrow"
            type="button"
            onClick={prevThumbnail}
            style={{ visibility: 'hidden' }}
          >
            &#10094;
          </button>
        )}
        {thumbnailUrls.map((thumbnail, index) => (
          <div className="thumbnail-item" key={`thumbnail${index}`}>
            {index <= range[1] && index >= range[0] ? (
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
            ) : null}
          </div>
        ))}
        {/* {thumbnailRefs.current.map(({ ref, index }) => (
          <div className="thumbnail-item" key={`thumbnail${index}`} ref={ref}>
            {index <= range[1] && index >= range[0] ? (
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
            ) : null}
              </div> */}
        {/* // ))} */}

        {thumbnailUrls.length > 6 && range[1] < thumbnailUrls.length - 1 ? (
          <button
            className="thumbnail-down-arrow"
            type="button"
            onClick={nextThumbnail}
          >
            &#10094;
          </button>
        ) : (
          <button
            className="thumbnail-down-arrow"
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
