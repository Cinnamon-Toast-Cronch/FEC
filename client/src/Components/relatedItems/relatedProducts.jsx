import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './relatedCard.jsx';

function relatedProducts({ product }) {
  const [relatedItems, setRelatedItems] = useState([]);

  useEffect(() => {
    axios.get(`/products/${product.id}/related`)
      .then(({ data }) => {
        axios.all(data.map((id) => {
          return (
            axios.get(`/products/${id}`)
          );
        }))
          .then((res) => {
            setRelatedItems(res);
          });

        // const request = {
        //   params: {
        //     id: data,
        //   },
        // };

        // axios.get('/products', request)
        //   .then((res) => {
        //     console.log(res)
        //     // setRelatedItems(res.data);
        //   });

      });
  }, [product]);

  return (
    <div className="carousel">
      {
        // console.log('check',relatedItems),
        relatedItems.map(({ data }) => {
          return <Card key={data.id} data={data} />;
        })
      }
    </div>
  );
}

export default relatedProducts;
