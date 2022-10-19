import React from 'react';
import axios from 'axios';
import Rnr from './ratingsReviews/RatingReviewContainer.jsx'; // TODO - fill in filepath

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
      <div className="banner">
        <h1 className="appTitle">App Title: Hello World</h1>
      </div>
      <div className="widgets">
        <Rnr product={product} />
      </div>
    </div>
  );
}

export default App;
