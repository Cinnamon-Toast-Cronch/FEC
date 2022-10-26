import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from '../relatedCarousel/relatedCard/cardComponents/image.jsx';
import Category from '../relatedCarousel/relatedCard/cardComponents/category.jsx';
import Name from '../relatedCarousel/relatedCard/cardComponents/name.jsx';
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
        <button onClick={() => handleDeleteOutfit(outfit.id)}>X</button>
        <div>
          <img className="img" src={styleDetails[0].photos[0].thumbnail_url} />
        </div>
        {/* <Image images={styleDetails[0].photos[0].thumbnail_url} /> */}
        <Category category={outfit.category} />
        <Name name={outfit.name} />
        <Price price={styleDetails} />
        <Rating product={outfit} />
      </div>
    );
  }
}

export default Card;
