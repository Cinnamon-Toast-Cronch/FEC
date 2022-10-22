import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import ClickableStarRating from './ClickableStarRating.jsx';
import CharacteristicRow from './CharacteristicRow.jsx';

function ReviewSubmissionForm({ close, characteristics }) {
  const [formData, setFormData] = useState({});

  const onChange = (e) =>
    setFormData((prev) => {
      const stateCopy = { ...prev };
      stateCopy[e.target.name] = e.target.value;
      return stateCopy;
    });

  const onChangeCharacteristic = (e) =>
    setFormData((prev) => {
      const stateCharacteristicsCopy = { ...prev.characteristics };
      stateCharacteristicsCopy[e.target.name] = e.target.value;
      return { ...prev, characteristics: stateCharacteristicsCopy };
    });

  return (
    <form className="rnr-submission-form">
      <div className="flex-between">
        <ClickableStarRating onChange={onChange} />
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
            onChange={onChange}
          />
          yes
        </label>
        <label htmlFor="recommend-no">
          <input
            type="radio"
            name="recommend"
            id="recommend-no"
            value="false"
            onChange={onChange}
          />
          no
        </label>
      </div>
      {_.map(characteristics, (char, key) => (
        <CharacteristicRow
          characteristic={key}
          characteristicId={char.id}
          key={char.id}
          onSelection={onChangeCharacteristic}
        />
      ))}
      <label htmlFor="review-summary">
        Review Summary
        <textarea
          id="review-summary"
          name="summary"
          placeholder="The most important factor for my review is..."
          onChange={onChange}
        />
      </label>
      <label htmlFor="review-body">
        Review body
        <textarea id="review-body" name="body" onChange={onChange} />
        {/* Text area min char counter goes here */}
      </label>
      {/* Ability to upload images goes here */}
      <label htmlFor="review-nickname">
        Display name
        <input
          type="text"
          id="review-nickname"
          placeholder="Example: jackson11!"
          name="name"
          onChange={onChange}
        />
        For privacy reasons, do not use your full name or email address.
      </label>
      <label htmlFor="review-email">
        Email
        <input
          type="text"
          id="review-email"
          placeholder="Example: jackson11@email.com"
          name="email"
          onChange={onChange}
        />
        For authentication reasons, you will not be emailed.
      </label>
      <button type="submit">Submit</button>
    </form>
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
