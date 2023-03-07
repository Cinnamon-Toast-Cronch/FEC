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
      <p>Love it? Share it!</p>
      <div className="social-media-icons">
        <FacebookShareButton
          quote={product.description}
          url="http://localhost:3000/"
          style={{ padding: '.5vh' }}
        >
          <FacebookIcon size={30} borderRadius="5px" />
        </FacebookShareButton>

        <TwitterShareButton
          title={product.name}
          via="Cinnamon"
          url="http://localhost:3000/"
          style={{ padding: '.5vh' }}
        >
          <TwitterIcon size={30} borderRadius="5px" />
        </TwitterShareButton>

        <PinterestShareButton
          media={sharePic.url}
          description={product.description}
          url="http://localhost:3000/"
          style={{ padding: '.5vh' }}
        >
          <PinterestIcon size={30} borderRadius="5px" />
        </PinterestShareButton>
      </div>
    </div>
  );
}
export default SocialMedia;
