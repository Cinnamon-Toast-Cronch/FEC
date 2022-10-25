// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// // import StarRating from '../../../../ratingsReviews/StarRating.jsx';
// import CountStarRatings from './CountStarRatings.jsx';

// // import the star rating file
// // takes in product/product id
// // does axios get to reviews/meta/product id
// // pass in the argument into star rating file
// function Stars({ product }) {
//   const [ratings, setRatings] = useState({});

//   useEffect(() => {
//     axios.get(`/reviews/meta?product_id=${product.id}`)
//       .then((res) => {
//         setRatings(res.data.ratings);
//       });
//   }, [product]);

//   if (Object.keys(ratings).length) {
//     return (
//       <CountStarRatings ratings={ratings} />
//       );
//     }
// }

// export default Stars;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// // import StarRating from '../../../../ratingsReviews/StarRating.jsx';
// import CountStarRatings from './CountStarRatings.jsx';

// // import the star rating file
// // takes in product/product id
// // does axios get to reviews/meta/product id
// // pass in the argument into star rating file
// function Stars({ product }) {
//   const [ratings, setRatings] = useState({});

//   useEffect(() => {
//     axios.get(`/reviews/meta?product_id=${product.id}`)
//       .then((res) => {
//         setRatings(res.data.ratings);
//       });
//   }, [product]);

//   if (Object.keys(ratings).length) {
//     return (
//       <CountStarRatings ratings={ratings} />
//       );
//     }
// }

// export default Stars;
