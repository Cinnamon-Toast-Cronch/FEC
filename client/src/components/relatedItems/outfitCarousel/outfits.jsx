import React, { useState, useEffect } from 'react';
import OutfitCard from './outfitCard.jsx';

function Outfits({ product }) {
  const storage = JSON.parse(localStorage.getItem('outfits')) || [];
  const [outfits, setOutfits] = useState(storage);

  useEffect(() => {
    localStorage.setItem('outfits', JSON.stringify(outfits));
  }, [outfits]);

  const handleAddOutfit = () => {
    for (let i = 0; i < outfits.length; i++) {
      if (outfits[i].id === product.id) {
        return;
      }
    }
    setOutfits([...outfits, product]);
  };

  const handleDeleteOutfit = (selectedId) => {
    localStorage.clear();
    const newOutfit = outfits.filter((outfit) => outfit.id !== selectedId);
    setOutfits(newOutfit);
  };

  return (
    <div className="outfit-carousel">
      <div className="outfit-card" onClick={handleAddOutfit}>+ Add to Outfit ** make it a card</div>
      {
        outfits ?
          outfits.map((outfit) => (
            <OutfitCard outfit={outfit} handleDeleteOutfit={handleDeleteOutfit} key={outfit.id} />
          ))
          : null
      }
    </div>
  );
}

export default Outfits;
