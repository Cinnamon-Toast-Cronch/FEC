import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import ClickableStarRating from './ClickableStarRating.jsx';
import CharacteristicRow from './CharacteristicRow.jsx';

function ReviewSubmissionForm({ close, characteristics, productId }) {
  const [formData, setFormData] = useState({
    product_id: productId,
    summary: '',
    photos: [],
    characteristics: {},
  });
  const [submitted, setSubmitted] = useState(false);

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

  const validateForm = () => {
    // Has required fields
    if (
      _.difference(
        ['rating', 'body', 'recommend', 'name', 'email', 'characteristics'],
        _.keys(formData)
      ).length > 0
    ) {
      return false;
    }

    // Has required characteristics
    _.difference(
      _.pluck(characteristics, 'id'),
      _.keys(formData.characteristics)
    );
    if (
      _.difference(
        _.pluck(characteristics, 'id'),
        _.keys(formData.characteristics).map((val) => parseInt(val))
      ).length > 0
    ) {
      return false;
    }

    // Summary, display name, and email are less than or equal to 60 characters
    if (
      formData.summary.length > 60 ||
      formData.name.length > 60 ||
      formData.email.length > 60
    ) {
      return false;
    }
    // Body is over 50 characters and less than or equal to 1000 characters
    if (formData.body.length < 50 || formData.body.length > 1000) {
      return false;
    }
    return true;
  };

  const submitForm = () => {
    console.log('form submitted');
  };

  const required = submitted && <p className="rnr-required">Required</p>;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!validateForm()) {
          console.log('form rejected');
          setSubmitted(true);
        } else {
          console.log('form submitted');
        }
      }}
      className="rnr-submission-form"
    >
      <div className="flex-between">
        <div>
          <ClickableStarRating onChange={onChange} />
          {!formData.rating && required}
        </div>
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
        {!formData.recommend && required}
      </div>
      {_.map(characteristics, (char, key) => (
        <div key={char.id}>
          <CharacteristicRow
            characteristic={key}
            characteristicId={char.id}
            onSelection={onChangeCharacteristic}
          />
          {!formData.characteristics[char.id] && required}
        </div>
      ))}
      <label htmlFor="review-summary">
        Review Summary
        <textarea
          id="review-summary"
          name="summary"
          placeholder="Example: Best purchase ever!"
          onChange={onChange}
        />
      </label>
      <label htmlFor="review-body">
        Review body
        <textarea
          id="review-body"
          name="body"
          onChange={onChange}
          placeholder="Why did you like the product or not?"
        />
        <p>
          {formData.body.length < 50
            ? `Minimum required characters left: ${50 - formData.body.length}`
            : 'Minimum reached'}
        </p>
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
        {!formData.name && required}
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
        {!formData.email && required}
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

ReviewSubmissionForm.propTypes = {
  close: PropTypes.func.isRequired,
  characteristics: PropTypes.object,
  productId: PropTypes.number,
};

ReviewSubmissionForm.defaultProps = {
  characteristics: {},
  productId: undefined,
};

export default ReviewSubmissionForm;
