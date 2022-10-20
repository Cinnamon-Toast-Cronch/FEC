import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from './cardComponents/image.jsx';
import Category from './cardComponents/category.jsx';
import Name from './cardComponents/name.jsx';
import Price from './cardComponents/price.jsx';
// import Rating from './cardComponents/rating.jsx';
import Comparison from './cardComponents/comparison.jsx';
// import './cardComponents.css';

// handleCardClick ----need to have a set state prop to change state on app

function Card({ data }) {
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
    <div className="card">
      {/* {starAction? return <Comparison/> : return null} */}
      <Image images={images} handlesComparePopup={handlesComparePopup}></Image>
      <Category category={data.category} />
      <Name name={data.name} />
      <Price price={data.default_price} />
      <div className="rating">*STAR RATING*</div>
      <Comparison trigger={comparePopup} handlesComparePopup={handlesComparePopup}/>
    </div>
    );
  } else {
    return null;
  }

}

export default Card;
