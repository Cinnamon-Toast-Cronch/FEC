import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './relatedCard.jsx';

function relatedProducts({ product }) {
  const [relatedItems, setRelatedItems] = useState([]);
  const endpoints = [];

  useEffect(() => {
    axios.get(`/products/${product.id}/related`)
      .then(({ data }) => {
        // setRelatedItems(data);

        data.map((item) => {
          return endpoints.push(`/products/${item}/styles`);
        })
          .then((res) => {
            console.log(res);
          })


        // const request = {
        //   params: {
        //     id: data,
        //   },
        // };

  //       axios.get(`/products/${request.params.id[0]}/styles`)
  //         .then((res) => {
  //           console.log(res);
  //         });

        // axios.get('/products', request)
        //   .then((res) => {
        //     console.log(res)
        //     // setRelatedItems(res.data);
        //   });

        // data.forEach((id) => {
        //   axios.get(`/products/${id}`)
        //     .then((res) => {
        //       setRelatedItems([...relatedItems, res.data]);
        //     });
        // });

      });
  }, [product]);

  return (
    <div className="carousel">
      {
        relatedItems.map((item) => {
          // console.log(item)
          return <Card key={item.id} item={item} />;
        })
      }
    </div>
  );
}

export default relatedProducts;
