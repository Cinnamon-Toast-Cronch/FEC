import React from 'react'
import Related_Products from './Related-Products.jsx'
import Your_Outfits from './Your-Outfits.jsx'

function Container(prop) {
  return (
    <div className='Container'>
      <Related_Products className='Related-Products'/>
      <Your_Outfits className='Your-Outfits' />
    </div>
  )
}

export default Container