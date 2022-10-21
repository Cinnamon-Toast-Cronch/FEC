import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from './cardComponents/image.jsx';
import Category from './cardComponents/category.jsx';
import Name from './cardComponents/name.jsx';
import Price from './cardComponents/price.jsx';
// import Rating from './cardComponents/rating.jsx';
import Comparison from './cardComponents/comparison.jsx';
// import './cardComponents.css';

// handleCardClick ----need to have a set state prop to change current displayed product on app

function Card({ data, displayProduct }) {
  const [images, setImages] = useState([]);
  const [comparePopup, setComparePopup] = useState(false);
  const handlesComparePopup = () => {
    setComparePopup(!comparePopup);
  };

  useEffect(() => {
    axios.get(`/products/${data.id}/styles`)
      .then((res) => {
        setImages(res.data.results[0].photos[0].thumbnail_url);
      });
  }, [data]);

  if (data !== undefined) {
    return (
      <div className="related-card">
        <li>
          <Image images={images} handlesComparePopup={handlesComparePopup} />
          <Category category={data.category} />
          <Name name={data.name} />
          <Price price={data.default_price} />
          <div className="rating">*STAR RATING*</div>
          <Comparison trigger={comparePopup} handlesComparePopup={handlesComparePopup} data={data} displayProduct={displayProduct}/>
        </li>
      </div>
    );
  } else {
    return null;
  }
}

export default Card;
