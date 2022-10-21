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
    <span>
      {
        allFeatures.map((feature) => (
          <tr>
            <FeaturesCheck feature={feature} currentFeatures={displayProductFeature} />
            <th>{feature}</th>
            <FeaturesCheck feature={feature} currentFeatures={relatedProductFeature} />
          </tr>
        ))
      }
    </span>
  );
}

export default ComparisonRow;
