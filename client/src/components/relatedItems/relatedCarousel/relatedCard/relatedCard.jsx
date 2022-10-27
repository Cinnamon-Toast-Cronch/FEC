import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from './cardComponents/image.jsx';
import Category from './cardComponents/category.jsx';
import Name from './cardComponents/name.jsx';
import Price from './cardComponents/price.jsx';
import Rating from './cardComponents/getStarRating.jsx';
import Comparison from './cardComponents/comparison.jsx';

function Card({ data, displayProduct, setProduct }) {
  const [productStyles, setProductStyles] = useState([]);
  const [comparePopup, setComparePopup] = useState(false);
  const handlesComparePopup = () => {
    setComparePopup(!comparePopup);
  };

  useEffect(() => {
    axios.get(`/products/${data.id}/styles`)
      .then((res) => {
        setProductStyles(res.data.results);
      });
  }, [data]);

  if (data !== undefined && productStyles.length) {
    return (
      <div className="related-card">
      {/* <div className="related-card" onClick={()=> setProduct(data)}> */}
        <Image images={productStyles[0].photos[0].thumbnail_url}
          handlesComparePopup={handlesComparePopup} />
        <Category category={data.category} />
        <Name name={data.name} />
        <Price price={productStyles} />
        <div className="related-starRatings">
          <Rating product={data} />
        </div>
        <Comparison trigger={comparePopup} handlesComparePopup={handlesComparePopup} data={data}
          displayProduct={displayProduct} />
      </div>
    );
  }
  return null;
}

export default Card;
