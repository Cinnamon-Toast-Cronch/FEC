import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import AnswerCard from './AnswerCard.jsx';

const { useState, useEffect } = React;

function QuestionCard(props) {
  const { question } = props;
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    axios.get(`/qa/questions/${question.question_id}/answers`)
      .then((response) => setAnswers(response.data.results));
  }, []);

  return (
    <div>
      <div className="question">
        Q:
        {question.question_body}
      </div>
      <div>
        helpful?
        <u>yes</u>
        {' '}
        {question.helpfulness}
        {' '}
        |
        {' '}
        <u>Add answer</u>
      </div>
      <div className="answers">
        {answers.map((answer, i) => (
          <AnswerCard
            className="answerCard"
            answer={answer}
            i={i}
            key={i}
          />
        ))}
      </div>
      <div>
        <b>LOAD MORE ANSWERS</b>
      </div>
    </div>
  );
}

export default QuestionCard;
