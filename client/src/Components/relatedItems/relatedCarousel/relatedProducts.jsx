import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './relatedCard.jsx';

function relatedProducts({ product }) {
  const [relatedItems, setRelatedItems] = useState([]);

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

  if (relatedItems !== undefined) {

    return (
      <div className="carousel" data-testid="con-1">
      {
        // console.log('check',relatedItems),
        relatedItems.map(({ data }) => {
          return <Card key={data.id} data={data} />;
        })
      }
    </div>
  );
  } else {
    return null;
  }
}

export default relatedProducts;
