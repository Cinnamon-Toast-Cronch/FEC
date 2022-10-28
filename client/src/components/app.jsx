import React from 'react';
import axios from 'axios';
import ProductDetails from './productDetails/ProductDetails.jsx';
import QnaWidget from './questionsAnswers/A-QnaWidget.jsx';
import Rnr from './ratingsReviews/RatingReviewContainer.jsx';
import RelatedItems from './relatedItems/container.jsx';

const { useState, useEffect } = React;

function App() {
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get('/products').then(({ data }) => {
      setProduct(data[0]);
    });
  }, []);

  return (
    <div>
      <div className="banner">
        <h1 className="appTitle">App Title: Hello World</h1>
      </div>
      <div className="widgets">
        <ProductDetails product={product} />
        <RelatedItems product={product} setProduct={setProduct} />
        <QnaWidget product={product} />
        <Rnr product={product} />
      </div>
    </div>
  );
}

export default App;
