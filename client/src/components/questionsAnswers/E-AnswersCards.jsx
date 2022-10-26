import React from 'react';
import axios from 'axios';

const { useState, useEffect } = React;

function AnswersCards(props) {
  const { answer, loadAnswers } = props;
  const {
    body, answerer_name, date, helpfulness, answer_id, photos
  } = answer;

  const [reported, setReported] = useState(localStorage.getItem(`reported-${answer_id}`));
  const [helpful, setHelpful] = useState(localStorage.getItem(`answer-${answer_id}`));

  // EXECUTES ON RENDER
  useEffect(() => {
    if (helpful === null) {
      setHelpful(false);
    }
    if (reported === null) {
      setReported(false);
    }
  }, []);

  function helpfulA(answer_id) {
    if (helpful === false) {
      axios.put(`/qa/answers/${answer_id}/helpful`)
        .then(() => {
          localStorage.setItem(`answer-${answer_id}`, true);
        })
        .then(() => setHelpful(true))
        .then(() => loadAnswers());
    }
  }

  function handleReport(answer_id) {
    if (reported === false) {
      axios.put(`/qa/answers/${answer_id}/report`)
        .then(() => localStorage.setItem(`reported-${answer_id}`, true));
    }
  }

  return (
    <div>
      <div className="answer">
        A:
        {' '}
        <p className="aBody">{body}</p>
      </div>
      <div className="answerPhotos">
        {photos.map((photo) => (
          <img
            className="userUploadedPhoto"
            src={photo.url}
            alt="user uploaded"
            key={photo.url}
          />
        ))}
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
          className="helpfulA"
          type="button"
          onClick={() => helpfulA(answer_id)}
        >
          <u>yes</u>
        </button>
        {' ('}
        {helpfulness}
        {') '}
        |
        {' '}
        <button
          type="button"
          className="qnaReport"
          onClick={() => {
            handleReport(answer_id);
            setReported(true);
          }}
        >
          <u>{reported ? 'reported' : 'report'}</u>

        </button>
      </div>
    </div>
  );
}

export default AnswersCards;
