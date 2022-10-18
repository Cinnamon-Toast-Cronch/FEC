import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import RelatedProducts from './relatedProducts.jsx';
import Outfits from './outfits.jsx';

function Container({ product }) {
  // should have a product id passed as prop to get request but hardcode for now

  // const [relatedItems, setRelatedItems] = useState([]);

  // useEffect(() => {
  //   axios.get(`/products/${product.id}/related`)
  //     .then(({ data }) => {
  //       // setRelatedItems(data);
  //       data.forEach((id) => {
  //         axios.get(`/products/${id}`)
  //           .then((res) => {
  //             setRelatedItems([...relatedItems, res.data]);
  //           });
  //       });
  //     });
  // }, [product]);

  return (
    <div className="container">
      <RelatedProducts product={product}/>
      <Outfits />
    </div>
  );
}

export default Container;
