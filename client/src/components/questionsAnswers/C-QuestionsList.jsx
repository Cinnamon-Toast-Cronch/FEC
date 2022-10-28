import React, { useState, useEffect } from 'react';
import QuestionsCards from './D-QuestionsCards.jsx';

function QuestionsList(props) {
  const { productName, loadData, questions, searchedQuestions, noQs } = props;
  const [displayedQs, setDisplayedQs] = useState([]);

  useEffect(() => {
    if (searchedQuestions.length) {
      setDisplayedQs(searchedQuestions.slice(0, noQs));
    } else {
      setDisplayedQs(questions.slice(0, noQs));
    }
  }, [questions, searchedQuestions, noQs]);

  return (
    <div className="questionsList">
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
