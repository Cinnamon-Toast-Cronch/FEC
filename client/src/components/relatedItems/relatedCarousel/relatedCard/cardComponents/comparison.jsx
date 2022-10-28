import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Row from './compareRows.jsx';

function Comparison({ trigger, handlesComparePopup, data, displayProduct }) {
  const [displayProductDetails, setDisplayProductDetails] = useState({});
  useEffect(() => {
    axios.get(`/products/${displayProduct.id}`)
      .then((res) => {
        setDisplayProductDetails(res.data);
      });
  }, [displayProduct]);

  if (data && displayProduct) {
    return (
      trigger ?
        (
          <div className="comparison-bg">
            <div className="comparison-popup">
              <div className="comparison-button">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlesComparePopup();
                  }}
                >
                  Close
                </button>
              </div>
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>{displayProductDetails.name}</th>
                    <th>Products</th>
                    <th>{data.name}</th>
                  </tr>
                </thead>
                <tbody>
                  <Row
                    displayProductFeature={displayProductDetails.features}
                    relatedProductFeature={data.features}/>
                </tbody>
              </table>
            </div>
          </div>
        ) : null
    );
  }
}

export default Comparison;
