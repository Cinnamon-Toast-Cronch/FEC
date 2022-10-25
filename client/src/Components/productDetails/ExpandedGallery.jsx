import React from 'react';
import ImageThumbnails from './ImageThumbnails.jsx';
import ArrowButtons from './ArrowButtons.jsx';
import GalleryList from './GalleryList.jsx';

function ExpandedGallery() {
  // account for icons, not current icon will be darker  (see w3)
  // have an icon to exit expanded view
  // HOVER: mouse --> +
  // CLICK: zoom image by 2.5x
  //  -HOVER: portion of image shown corresponds to
  //  current mouse position relative to screen and
  //  should be proportional
  //  -HIDE arrow buttons + icons
  //  -mouse --> -
  //   CLICK: return to normal expanded image gallery
  //   view

  return (
    <>
      {/* <div className="expanded-gallery-content"/>
      </div> */}
    </>
  );
}
export default ExpandedGallery;
