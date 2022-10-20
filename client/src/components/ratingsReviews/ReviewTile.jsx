import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import StarRating from './StarRating.jsx';

function ReviewTile({ review, queryReviews }) {
  const humanReadableDate = new Date(review.date).toLocaleDateString(
    undefined,
    { year: 'numeric', month: 'long', day: 'numeric' }
  );

  const [markedAsHelpful, setMarkedAsHelpful] = useState(false);

  const markAsHelpful = () => {
    Axios.put(`/reviews/${review.review_id}/helpful`);
    setMarkedAsHelpful(true);
  };

  return (
    <>
      <div className="review-tile">
        <div className="flex-between">
          <StarRating rating={review.rating} />
          <p>{`${review.reviewer_name}, ${humanReadableDate}`}</p>
        </div>
        <h5>{review.summary}</h5>
        <p>{review.body}</p>
        {review.response && (
          <div className="response">
            <h6>Response from seller:</h6>
            <p>{review.response}</p>
          </div>
        )}
        {review.photos.map((photo) => (
          <div className="img-container" key={photo.id}>
            <img src={photo.url} alt="Photograph from reviewer" />
          </div>
        ))}
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
  queryReviews: PropTypes.func.isRequired,
};

export default ReviewTile;
