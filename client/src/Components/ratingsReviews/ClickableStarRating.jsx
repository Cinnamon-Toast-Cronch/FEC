import React, { useState } from 'react';
import StarRating from './StarRating.jsx';

function ClickableStarRating() {
  const [currentRating, setCurrentRating] = useState(0);

  const ratingDescriptions = {
    1: <p>Poor</p>,
    2: <p>Fair</p>,
    3: <p>Average</p>,
    4: <p>Good</p>,
    5: <p>Great</p>,
  };

  return (
    <div className="rnr-overall-rating">
      <StarRating
        rating={currentRating}
        onClick={(value) => setCurrentRating(value)}
      />
      {ratingDescriptions[currentRating]}
    </div>
  );
}

export default ClickableStarRating;
