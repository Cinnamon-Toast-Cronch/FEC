import React from 'react';

function AnswerCard(props) {
  const { answer } = props;
  return (
    <div>
      <div className="answer">
        A:
        {' '}
        {answer.body}
      </div>
      <div className="answerDetails">
        by
        {' '}
        {answer.answerer_name}
        ,
        {' '}
        {answer.date}
        {' '}
        | helpful?
        <u>yes</u>
        {' '}
        {answer.helpfulness}
        {' '}
        |
        {' '}
        <u>report</u>
      </div>
    </div>
  );
}

export default AnswerCard;
