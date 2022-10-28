import React from 'react';
import axios from 'axios';
import ProductDetails from './productDetails/ProductDetails.jsx';
import QnaWidget from './questionsAnswers/A-QnaWidget.jsx';
import Rnr from './ratingsReviews/RatingReviewContainer.jsx'; // TODO - fill in filepath
import RelatedItems from './relatedItems/container.jsx'; // TODO - fill in filepath

const { useState, useEffect } = React;

function App() {
  // product points to a product_id?
  const [product, setProduct] = useState({});
  // setProduct on page load
  useEffect(() => {
    axios.get('/products').then(({ data }) => {
      setProduct(data[0]);
    });
  }, []);

  return (
    <div>
      <div className="widgets">
        <div className="title-container">
          <h1 className="title">Cinnamon</h1>
          <div className="title-icons">
            <span className="material-symbols-outlined">
              shopping_cart_checkout
            </span>
            <span className="material-symbols-outlined">account_circle</span>
          </div>
        </div>
        <ProductDetails product={product} />
        <RelatedItems product={product} setProduct={setProduct} />
        <QnaWidget product={product} />
        <Rnr product={product} />
      </div>
    </div>
  );
}

export default App;
