import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './relatedCard/relatedCard.jsx';

function RelatedProducts({ product, setProduct }) {
  const [relatedItems, setRelatedItems] = useState([]);
  const [carouselPosition, setCarouselPosition] = useState(3);
  // const productID = 40344;
  // hardcoded product id to pass Jest test
  useEffect(() => {
    axios.get(`/products/${product.id}/related`)
      .then(({ data }) => {
        const filteredId = Array.from(new Set(data));
        axios.all(filteredId.map((id) => (
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
    if (carouselPosition === relatedItems.length) {
      setCarouselPosition(carouselPosition - 1);
      document.getElementById('related-carousel').scrollLeft -= 60;
    } else {
      setCarouselPosition(carouselPosition - 1);
      document.getElementById('related-carousel').scrollLeft -= 205;
    }
  };

  const handleCarouselRight = () => {
    setCarouselPosition(carouselPosition + 1);
    document.getElementById('related-carousel').scrollLeft += 205;
  };

  if (relatedItems !== undefined) {
    return (
      <div className="carousel-container" data-testid="con-1">
        {
          carouselPosition > 3 ?
          <div className="previous"onClick={handleCarouselLeft}> &#10094; </div>
          : null
        }
        <div id="related-carousel">
          {
            relatedItems.map(({ data }) => (
              <Card key={data.id} data={data} displayProduct={product} setProduct={setProduct} />
            ))
          }
        </div>
        {
        carouselPosition < relatedItems.length ?
          <div className="next" onClick={handleCarouselRight}> &#10095; </div>
          : null
        }
      </div>
    );
  }
}

export default RelatedProducts;
