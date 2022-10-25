import React from 'react';
import QuestionsCards from './D-QuestionsCards.jsx';

const { useState, useEffect } = React;

function QuestionsList(props) {
  const { productName, displayedQs, loadData } = props;
  return (
    <div className="questionsList">
      {displayedQs.map((question, i) => (
        <QuestionsCards
          loadData={loadData}
          productName={productName}
          question={question}
          i={i}
          key={i}
        />
      ))}
    </div>
  );
}

export default QuestionsList;
