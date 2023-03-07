import React, { useState, useRef } from 'react';

function Zoom({ imageUrl, setZoom, zoom, handleZoom }) {
  const sourceRef = useRef(null);
  const targetRef = useRef(null);
  const containerRef = useRef(null);

  const [opacity, setOpacity] = useState(0);
  const [offset, setOffset] = useState({ left: 0, top: 0 });

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const handleMouseMove = (e) => {
    const targetRect = targetRef.current.getBoundingClientRect();
    const sourceRect = sourceRef.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    const xRatio = (targetRect.width - containerRect.width) / sourceRect.width;
    const yRatio =
      (targetRect.height - containerRect.height) / sourceRect.height;

    const left = Math.max(
      Math.min(e.pageX - sourceRect.left, sourceRect.width),
      0
    );
    const top = Math.max(
      Math.min(e.pageY - sourceRect.top, sourceRect.height),
      0
    );

    setOffset({
      left: left * -xRatio,
      top: top * -yRatio,
      width: sourceRect.width * 2.5,
      height: sourceRect.height * 2.5,
    });
  };

  return (
    <div
      className="zoom-container"
      ref={containerRef}
      onClick={() => setZoom(false)}
      // onClick={() => handleZoom()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <img ref={sourceRef} className="source" alt="source" src={imageUrl} />
      <img
        ref={targetRef}
        className="target"
        alt="target"
        style={{
          opacity,
          left: offset.left,
          top: offset.top,
          width: offset.width,
          height: offset.height,
        }}
        src={imageUrl}
      />
    </div>
  );
}

export default Zoom;
