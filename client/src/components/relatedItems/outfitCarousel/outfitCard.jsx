import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Price from '../relatedCarousel/relatedCard/cardComponents/price.jsx';
import Rating from '../relatedCarousel/relatedCard/cardComponents/getStarRating.jsx';

function Card({ outfit, handleDeleteOutfit }) {
  const [styleDetails, setStyleDetails] = useState({});

  useEffect(() => {
    axios.get(`/products/${outfit.id}/styles`)
      .then((res) => {
        setStyleDetails(res.data.results);
      });
  }, []);
  if (outfit !== undefined && styleDetails.length) {
    return (
      <div className="outfit-card">
        <div className='outfit-image-container'>
          <div className="remove-outfit" onClick={() => handleDeleteOutfit(outfit.id)}>&#9746;</div>
          <img className="related-img" src={styleDetails[0].photos[0].thumbnail_url} />
        </div>
        <div className="related-category">{outfit.category}</div>
        <div className="related-name">{outfit.name}</div>
        <Price price={styleDetails} />
        <Rating product={outfit} />
      </div>
    );
  }
}

export default Card;
