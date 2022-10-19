import React from 'react';
import QuestionCard from './QuestionCard.jsx';

function Accordion(props) {
  const { product, questions } = props;
  return (
    <div>
      {questions.map((question, i) => (
        <QuestionCard
          className="questionCard"
          question={question}
          i={i}
          key={i}
        />
      ))}
    </div>
  );
}

export default Accordion;
