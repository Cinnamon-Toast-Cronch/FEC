import React from 'react'
import { useState, useEffect} from 'react'
import Related_Products from './relatedProducts.jsx'
import Your_Outfits from './yourOutfits.jsx'

function Container({product}) {
  // should have a product id passed as prop to get request but hardcode for now

  const [relatedItems, setRelatedItems] = useState([]);
  useEffect(() => {
    axios.get(`/products/${product_id}/related`)
      .then((data) => {

      })
  });

  return (
    <div className='container'>
      <Related_Products className='relatedProducts' relatedItems={relatedItems}/>
      <Your_Outfits className='yourOutfits' />
    </div>
  )
}

export default Container;