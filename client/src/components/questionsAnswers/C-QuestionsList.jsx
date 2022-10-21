import React from 'react';
import QuestionsCards from './D-QuestionsCards.jsx';

function QuestionsList(props) {
  const { productName, questions } = props;
  return (
    <div>
      {questions.map((question, i) => (
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
