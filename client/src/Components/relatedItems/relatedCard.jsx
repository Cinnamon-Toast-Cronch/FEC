import React, { useState, useEffect } from 'react';
import axios from 'axios';
// make another component for the pop up comparison and import

// handleStarClick
// handleCardClick ----need to have a set state prop to change state on app

function Card({ data }) {
  // console.log('card',data)
  const [starAction, setStarAction] = useState(false);
  const [images, setImages] = useState([]);
  const handleStarAction = () => {
    setStarAction(!starAction);
  };

  useEffect(() => {
    axios.get(`/products/${data.id}/styles`)
      .then((res) => {
        // console.log('card', res.data.results[0].photos[0].thumbnail_url)
        setImages(res.data.results[0].photos[0].thumbnail_url);
      });
  }, [data]);
// console.log(images[0].thumbnail_url)
  // for (let i = 0; i < images.length; i ++) {
  //   if (images[i]["default?"]) {
      return (
        <div className="card">
          {/* {starAction? return <Comparison/> : return null} */}
          <img src={images}></img>
          <button onClick={handleStarAction}>*STAR*</button>
          <div className="category">{data.category}</div>
          <div className="name">{data.name}</div>
          <div className="price">{data.default_price}</div>
          <div className="rating">*STAR RATING*</div>
        </div>
      );
  //   }
  // }
}

export default Card;
