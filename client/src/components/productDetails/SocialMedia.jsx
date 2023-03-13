import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  PinterestShareButton,
  PinterestIcon,
} from 'react-share';

function SocialMedia({ product, sharePic }) {
  return (
    <div className="social-media-container">
      <span>Share</span>
      <div className="social-media-icons">
        <FacebookShareButton
          quote={product.description}
          url="http://localhost:3000/"
          style={{ paddingRight: '3px', paddingLeft: '3px' }}
        >
          <FacebookIcon size={25} borderRadius="5px" />
        </FacebookShareButton>

        <TwitterShareButton
          title={product.name}
          via="Cinnamon"
          url="http://localhost:3000/"
          style={{ paddingRight: '3px', paddingLeft: '3px' }}
        >
          <TwitterIcon size={25} borderRadius="5px" />
        </TwitterShareButton>

        <PinterestShareButton
          media={sharePic.url}
          description={product.description}
          url="http://localhost:3000/"
          style={{ paddingRight: '3px', paddingLeft: '3px' }}
        >
          <PinterestIcon size={25} borderRadius="5px" />
        </PinterestShareButton>
      </div>
    </div>
  );
}
export default SocialMedia;
