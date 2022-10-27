import React from 'react';
import PropTypes from 'prop-types';

const CHARACTERISTIC_DESCRIPTORS = {
  Size: ['Small', 'Perfect', 'Large'],
  Width: ['Narrow', 'Perfect', 'Wide'],
  Comfort: ['Uncomfortable', 'Ok', 'Perfect'],
  Quality: ['Poor', 'What I expected', 'Perfect'],
  Length: ['Short', 'Perfect', 'Long'],
  Fit: ['Tight', 'Perfect', 'Loose'],
};

function CharacteristicVisualization({ characteristic, averageRating }) {
  const translationPercent = ((averageRating - 1) / 4) * 100;

  return (
    <div className="rnr-characteristic-visualization">
      <h6>{characteristic}</h6>
      <div className="rnr-characteristic-bar">
        <div
          style={{
            marginLeft: `calc(${translationPercent}% - (.8em * ${
              translationPercent / 100
            }))`,
          }}
          className="triangle-down"
        />
      </div>
      <div className="rnr-characteristic-descriptors">
        {CHARACTERISTIC_DESCRIPTORS[characteristic].map((val) => (
          <p key={val}>{val}</p>
        ))}
      </div>
    </div>
  );
}

CharacteristicVisualization.propTypes = {
  characteristic: PropTypes.string.isRequired,
  averageRating: PropTypes.number.isRequired,
};

export default CharacteristicVisualization;
