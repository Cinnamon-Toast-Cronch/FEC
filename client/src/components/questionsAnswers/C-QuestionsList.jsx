import React from 'react';
import QuestionsCards from './D-QuestionsCards.jsx';

function QuestionsList(props) {
  const { productName, displayedQs, loadData } = props;
  return (
    <div>
      {displayedQs.map((question, i) => (
        <QuestionsCards
          className="questionsCards"
          displayedQs={displayedQs}
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
