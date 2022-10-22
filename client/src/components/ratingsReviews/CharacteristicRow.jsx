import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CHARACTERISTIC_DESCRIPTIONS = {
  Size: [
    'A size too small',
    '½ a size too small',
    'Perfect',
    '½ a size too big',
    'A size too big',
  ],
  Width: [
    'Too narrow',
    'Slightly narrow',
    'Perfect',
    'Slightly wide',
    'Too wide',
  ],
  Comfort: [
    'Uncomfortable',
    'Sightly uncomfortable',
    'Ok',
    'Comfortable',
    'Pefect',
  ],
  Quality: [
    'Poor',
    'Below average',
    'What I expected',
    'Pretty great',
    'Perfect',
  ],
  Length: [
    'Runs short',
    'Runs slightly short',
    'Perfect',
    'Runs slightly long',
    'Runs long',
  ],
  Fit: [
    'Runs tight',
    'Runs slightly tight',
    'Perfect',
    'Runs slightly loose',
    'Runs loose',
  ],
};

function CharacteristicRow({ characteristic, characteristicId }) {
  const [currentValue, setCurrentValue] = useState(0);

  const onChange = (e) => setCurrentValue(e.target.value);

  return (
    <div className="rnr-characteristic-row">
      <h6>{characteristic}</h6>
      {currentValue === 0 ? (
        'None selected'
      ) : (
        <p>{CHARACTERISTIC_DESCRIPTIONS[characteristic][currentValue - 1]}</p>
      )}
      {[1, 2, 3, 4, 5].map((value) => (
        <label htmlFor={`review-${characteristic}-${value}`} key={value}>
          <input
            type="radio"
            name={characteristicId}
            id={`review-${characteristic}-${value}`}
            value={value}
            onChange={onChange}
          />
          {value}
        </label>
      ))}
    </div>
  );
}

CharacteristicRow.propTypes = {
  characteristic: PropTypes.string.isRequired,
  characteristicId: PropTypes.number.isRequired,
};

export default CharacteristicRow;
