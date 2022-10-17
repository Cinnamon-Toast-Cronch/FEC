import React from 'react'
import Card from './relatedCard'

function relatedProducts( { relatedItems } ) {
  return (
    <carousel>
      {
        relatedItems.map((item) => {
          axios.get(`/products/${item}`)
        })

      }
    </carousel>
  )
}

export default Related_Products