import React from 'react';

function AnswersCards(props) {
  const { answer } = props;
  const { body, answerer_name, date, helpfulness } = answer;
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
        <u>yes</u>
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
