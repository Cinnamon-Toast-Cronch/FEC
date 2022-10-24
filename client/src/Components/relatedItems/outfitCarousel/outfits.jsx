import React, { useState, useEffect } from 'react';
import OutfitCard from './outfitCard.jsx';

function Outfits({ product }) {
  const [outfits, setOutfits] = useState([{id: 40345}, {id: 40343}]);

  // **** store all product obj in a array under 1 key
  // or use id as key to store each product obj? <--leaning
  // because i would need the know what to delete when x is pressed

  // Store the whole product object in LocalStorage with stringify
  // parse when retriving

  // useEffect(() => {
  //   // retrieves the state from local storage
  //   const storage = JSON.parse(localStorage.getItem('outfits')) || [];
  //   // if (storage !== null) {
  //   //   // set the state
  //   //   setOutfits(storage);
  //   // }
  //   setOutfits(storage);
  // }, []);

  // maybe have another useeffect to render on outfits state change

  // have a state that is stored in local storage
  // render from localstorage, the state, on initial load with useEffect
  // handleClick on the '+' to add to outfit
  const handleAddOutfit = () => {
    // first check the state if that product already exist
      // no duplicates
    //set the state with the product id
    for (let i = 0; i < outfits.length; i++) {
      if (outfits[i].id === product.id) {
        return;
      }
    }
    setOutfits([...outfits, product]);
    console.log(product)
    localStorage.setItem(`testing`, JSON.stringify(product));
  };

  const handleDeleteOutfit = (selectedId) => {
  //filter the outfits state array to return new states array where state.id !== selectedId
  // reset the state with the new filter array
  // delete the selected id property in the localstorage
  }

  return (
    <div className="related-carousel">
      <div className="related-header">Your Outfit</div>
       <div className="outfit-card" onClick={handleAddOutfit}>+ Add to Outfit ** make it a card</div>
      {
        outfits.length ?
        // retrieve state from local storage and if state is not empty
        // map over the states
          outfits.map((outfit) => (
            <OutfitCard outfit={outfit} key={outfit.id} />
          ))
          : null
      }
    </div>
  );
}

export default Outfits;
