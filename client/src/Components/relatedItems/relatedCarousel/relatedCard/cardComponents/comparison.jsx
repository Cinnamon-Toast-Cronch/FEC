import React from 'react';

function Comparison({ trigger, handlesComparePopup, currentProduct, comparedProduct }) {
  return (
    trigger?
    <div className="comparison-popup"> hi
      <button onClick={() => handlesComparePopup()}>X</button>


    </div> : null
  );
}

export default Comparison;
