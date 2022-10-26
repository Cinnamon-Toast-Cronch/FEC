import React from 'react';

function FeaturesCheck({ feature, currentFeatures }) {
  let featureValue;

  for (let i = 0; i < currentFeatures.length; i++) {
    if (currentFeatures[i].feature === feature) {
      featureValue = currentFeatures[i].value;
      break;
    }
    featureValue = 'no such feature';
  }

  if (featureValue === true) {
    return (
      <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <td><i className="fa fa-check"></i></td>
      </>
    );
  } if (featureValue === null) {
    return (
      <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <td><i className="fa fa-remove"></i></td>
      </>
    );
  } if (featureValue === 'no such feature') {
    return (
      <td />
    );
  } return (
    <td>{featureValue}</td>
  );
  // ** need to return <td></td>******
}
export default FeaturesCheck;
