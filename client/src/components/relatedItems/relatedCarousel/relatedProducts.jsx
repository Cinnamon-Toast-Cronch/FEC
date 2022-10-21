import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './relatedCard/relatedCard.jsx';

function relatedProducts({ product }) {
  const [relatedItems, setRelatedItems] = useState([]);
  // set a count state to track count when left or right button is clicked
  // when count is 0, left arrow disappears
  // when count is = to the related length, right arrow dissappears
  const productID = 40344;
  useEffect(() => {
    axios.get(`/products/${productID}/related`)
      .then(({ data }) => {
        axios.all(data.map((id) => {
          return (
            axios.get(`/products/${id}`)
          );
        }))
      .catch((err) => {
        console.log(err);
      })
          .then((res) => {
            setRelatedItems(res);
          });
      });
  }, [product]);

  if (relatedItems !== undefined) {
    return (
      <div className="carousel" data-testid="con-1">
        <div className="header">Related Products</div>
        {/* make a left arrow icon div to click */}
        {/* make a right arrow icon div to click */}
        <ul>
          {
            relatedItems.map(({ data }) => {
              return <Card key={data.id} data={data} displayProduct={product} />;
            })
          }
      </ul>
      </div>
  );
  } else {
    return null;
  }
}

export default relatedProducts;
