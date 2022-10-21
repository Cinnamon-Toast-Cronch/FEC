import React from 'react';
import axios from 'axios';

const { useState, useEffect } = React;

function AnswersCards(props) {
  const { answer } = props;
  const { body, answerer_name, date, helpfulness, answer_id } = answer;

  const [helpful, setHelpful] = useState(localStorage.getItem(`answer-${answer_id}`));

  // EXECUTES ON RENDER
  useEffect(() => {
    if (helpful === null) {
      setHelpful(false);
    }
  }, []);

  // TODO write callback
  function helpfulA(answer_id) {
    if (helpful === false) {
      axios.put(`/qa/answers/${answer_id}/helpful`)
        .then(() => {
          localStorage.setItem(`answer-${answer_id}`, true);
        })
        .then(() => setHelpful(true));
    }
  }
  return (
    <div>
      <div className="answer">
        A:
        {' '}
        {body}
      </div>
      <div className="answerDetails">
        by
        {' '}
        {answerer_name}
        ,
        {' '}
        {date}
        {' '}
        | helpful?
        <button
          type="button"
          onClick={() => helpfulA(answer_id)}
        >
          <u>yes</u>
        </button>
        {' '}
        {helpfulness}
        {' '}
        |
        {' '}
        <button type="button"><u>report</u></button>
      </div>
    </div>
  );
}

export default AnswersCards;
