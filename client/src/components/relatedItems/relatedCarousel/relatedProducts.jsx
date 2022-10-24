import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './relatedCard/relatedCard.jsx';

function relatedProducts({ product }) {
  const [relatedItems, setRelatedItems] = useState([]);
  const [carouselPosition, setCarouselPosition] = useState(0);

  const productID = 40344;
  // hardcoded product id
  useEffect(() => {
    axios.get(`/products/${productID}/related`)
      .then(({ data }) => {
        axios.all(data.map((id) => (
          axios.get(`/products/${id}`)
        )))
          .catch((err) => {
            console.log(err);
          })
          .then((res) => {
            setRelatedItems(res);
          });
      });
  }, [product]);

  const handleCarouselLeft = () => {
    setCarouselPosition(carouselPosition - 1);
  };

  const handleCarouselRight = () => {
    setCarouselPosition(carouselPosition + 1);
  };

  if (relatedItems !== undefined) {
    return (
      <div className="related-carousel" data-testid="con-1">
        <div className="related-header">Related Products</div>
        {
          carouselPosition > 0 ?
          <div className="previous"onClick={handleCarouselLeft}> left </div>
          : null
        }
        <ul>
          {
            relatedItems.map(({ data }) => (
              <Card key={data.id} data={data} displayProduct={product} />
            ))
          }
        </ul>
        {
        carouselPosition < relatedItems.length ?
          <div className="next" onClick={handleCarouselRight}> right </div>
          : null
        }
      </div>
    );
  }
}

export default relatedProducts;
