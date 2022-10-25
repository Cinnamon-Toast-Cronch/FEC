import React from 'react';
import FeaturesCheck from './compareComponents/featuresCheck.jsx';

function ComparisonRow({displayProductFeature, relatedProductFeature}) {
  const allFeatures = [];

  for (let i = 0; i < displayProductFeature.length; i++) {
    allFeatures.push(displayProductFeature[i].feature);
  }

  for (let i = 0; i < relatedProductFeature.length; i++) {
    allFeatures.push(relatedProductFeature[i].feature);
  }

  return (
    <>
      {
        allFeatures.map((feature) => (
          <tr>
            <FeaturesCheck feature={feature} currentFeatures={displayProductFeature} />
            <td>{feature}</td>
            <FeaturesCheck feature={feature} currentFeatures={relatedProductFeature} />
          </tr>
        ))
      }
    </>
  );
}

export default ComparisonRow;
