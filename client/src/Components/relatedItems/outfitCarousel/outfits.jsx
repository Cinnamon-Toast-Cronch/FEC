import React from "react"
// import ( useState, useEffect ) from 'react'
import OutfitCard from './outfitCard.jsx'


function Outfits(props) {
  // have a state that is stored in local storage
  // render from localstorage, the state, on initial load with useEffect
  // handleClick on the '+' to add to outfit
  return (
    <div className='carousel'>
       <button>+ Add to Outfit ** make it a card</button>
       {/* {
        statesInStorage.map((state) => {
          return (
            <OutfitCard/>
          )
        })
       } */}

    </div>
  );
}

export default Outfits;
