import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import ReactDOM from 'react-dom';
import StarRating from './StarRating.jsx';
import Modal from './Modal.jsx';

function ReviewTile({ review }) {
  const humanReadableDate = new Date(review.date).toLocaleDateString(
    undefined,
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  const [markedAsHelpful, setMarkedAsHelpful] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPhotoUrl, setModalPhotoUrl] = useState('');
  const [showFullBody, setShowFullBody] = useState(false);

  const markAsHelpful = () => {
    if (
      !markedAsHelpful &&
      window.localStorage.getItem(`helpful-${review.review_id}`) !== 'true'
    ) {
      Axios.put(`/reviews/${review.review_id}/helpful`);
      setMarkedAsHelpful(true);
      window.localStorage.setItem(`helpful-${review.review_id}`, true);
    }
  };

  const imageModal = (
    <Modal>
      <div className="rnr-image-modal">
        <button type="button" onClick={() => setModalOpen(false)}>
          Close
        </button>
        <img src={modalPhotoUrl} alt="Photograph from reviewer" />
      </div>
    </Modal>
  );

  return (
    <>
      <div className="review-tile">
        <div className="flex-between">
          <StarRating rating={review.rating} />
          <p>{`${review.reviewer_name}, ${humanReadableDate}`}</p>
        </div>
        <h5>{review.summary}</h5>
        <div>
          <p>{showFullBody ? review.body : review.body.slice(0, 250)}</p>
          {review.body.length > 250 && !showFullBody && (
            <button
              type="button"
              className="text-like-button"
              onClick={() => setShowFullBody(true)}
            >
              Show More
            </button>
          )}
        </div>
        {review.recommend && (
          <div>
            <span className="material-symbols-outlined">check</span>
            <p>I recommend this product</p>
          </div>
        )}
        {review.response && (
          <div className="response">
            <h6>Response from seller:</h6>
            <p>{review.response}</p>
          </div>
        )}
        {review.photos.map((photo) => (
          <div className="img-container" key={photo.id}>
            <button
              className="button-no-styling"
              type="button"
              onClick={() => {
                setModalOpen(true);
                setModalPhotoUrl(photo.url);
              }}
            >
              <img src={photo.url} alt="Photograph from reviewer" />
            </button>
          </div>
        ))}
        {modalOpen && ReactDOM.createPortal(imageModal, document.body)}
        <div className="helpful-bar">
          <p>Helpful?</p>
          <button
            className="text-like-button"
            type="button"
            onClick={markAsHelpful}
          >
            Yes
          </button>
          <p>{`(${
            markedAsHelpful ? review.helpfulness + 1 : review.helpfulness
          })`}</p>
        </div>
      </div>
      <hr />
    </>
  );
}

ReviewTile.propTypes = {
  review: PropTypes.shape({
    review_id: PropTypes.number,
    rating: PropTypes.number,
    summary: PropTypes.string,
    recommend: PropTypes.bool,
    response: PropTypes.string,
    body: PropTypes.string,
    date: PropTypes.string,
    reviewer_name: PropTypes.string,
    helpfulness: PropTypes.number,
    photos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        url: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default ReviewTile;
