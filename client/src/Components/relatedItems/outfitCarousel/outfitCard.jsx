import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from '../relatedCarousel/relatedCard/cardComponents/image.jsx';
import Category from '../relatedCarousel/relatedCard/cardComponents/category.jsx';
import Name from '../relatedCarousel/relatedCard/cardComponents/name.jsx';
import Price from '../relatedCarousel/relatedCard/cardComponents/price.jsx';
// import Rating from './cardComponents/rating.jsx';

// handle deleting of a card and on storage when x is clicked

function Card({ outfit }) {
  const [styleDetails, setStyleDetails] = useState({});

  useEffect(() => {
    axios.get(`/products/${outfit.id}/styles`)
      .then((res) => {
        setStyleDetails(res.data.results[0].photos[0].thumbnail_url);
      });
  }, []);

  return (
    <div className='outfit-card'>
      <button>*X*</button>
      <Image images={styleDetails} />
      <Category category={outfit.category} />
      <Name name={outfit.name} />
      <Price price={outfit.default_price} />
      <div className="rating">*STAR RATING*</div>
    </div>
  );
}

export default Card;
