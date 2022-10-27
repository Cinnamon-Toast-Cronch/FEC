import React from 'react';
import axios from 'axios';
import PhotoModal from './P-PhotoModals.jsx';

const { useState, useEffect } = React;

const months = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
};

function AnswersCards(props) {
  const { answer, loadAnswers } = props;
  const {
    body, answerer_name, date, helpfulness, answer_id, photos
  } = answer;

  const [reported, setReported] = useState(localStorage.getItem(`reported-${answer_id}`));
  const [helpful, setHelpful] = useState(localStorage.getItem(`answer-${answer_id}`));
  const [openModal, setOpenModal] = useState(false);

  function modifyDate(date) {
    const month = months[Number(date[5] + date[6])];
    const day = date[8] + date[9];
    const year = date[0] + date[1] + date[2] + date[3];
    return `${month} ${day}, ${year}`;
  }

  const modDate = modifyDate(date);
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
          <div key={photo.url}>
            <img
              className="userUploadedPhoto"
              src={photo.url}
              alt="user uploaded"
              onClick={() => setOpenModal(true)}
            />
            {openModal && <PhotoModal url={photo.url} closeModal={setOpenModal} />}
          </div>
        ))}
      </div>
      <div className="answerDetails">
        by
        {' '}
        {answerer_name}
        ,
        {' '}
        {modDate}
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
