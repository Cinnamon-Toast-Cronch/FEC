import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import ClickableStarRating from './ClickableStarRating.jsx';
import CharacteristicRow from './CharacteristicRow.jsx';

function ReviewSubmissionForm({ close, characteristics }) {
  return (
    <div className="rnr-submission-form">
      <div className="flex-between">
        <ClickableStarRating />
        <button type="button" onClick={close}>
          Close
        </button>
      </div>
      <div>
        <h6>Would you recommend this product?</h6>
        <label htmlFor="recommend-yes">
          <input
            type="radio"
            name="recommend"
            id="recommend-yes"
            value="true"
            defaultChecked
          />
          yes
        </label>
        <label htmlFor="recommend-no">
          <input
            type="radio"
            name="recommend"
            id="recommend-no"
            value="false"
          />
          no
        </label>
      </div>
      {_.map(characteristics, (char, key) => (
        <CharacteristicRow
          characteristic={key}
          characteristicId={char.id}
          key={char.id}
        />
      ))}
      <label htmlFor="review-summary">
        Review Summary
        <textarea
          id="review-summary"
          name="summary"
          placeholder="The most important factor for my review is..."
        />
      </label>
      <label htmlFor="review-body">
        Review body
        <textarea id="review-body" name="body" />
        {/* Text area min char counter goes here */}
      </label>
      {/* Ability to upload images goes here */}
      <label htmlFor="review-nickname">
        Display name
        <input
          type="text"
          id="review-nickname"
          placeholder="Example: jackson11!"
        />
        For privacy reasons, do not use your full name or email address.
      </label>
      <label htmlFor="review-email">
        Email
        <input
          type="text"
          id="review-email"
          placeholder="Example: jackson11@email.com"
        />
        For authentication reasons, you will not be emailed.
      </label>
    </div>
  );
}

ReviewSubmissionForm.propTypes = {
  close: PropTypes.func.isRequired,
  characteristics: PropTypes.object,
};

ReviewSubmissionForm.defaultProps = {
  characteristics: {},
};

export default ReviewSubmissionForm;
