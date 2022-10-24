import React from 'react';
import QuestionsCards from './D-QuestionsCards.jsx';

const { useState, useEffect } = React;

function QuestionsList(props) {
  const { productName, displayedQs} = props;
  return (
    <div>
      {displayedQs.map((question, i) => (
        <QuestionsCards
          className="questionsCards"
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
