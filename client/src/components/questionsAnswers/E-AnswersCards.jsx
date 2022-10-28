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
  const { answer, loadData } = props;
  const {
    body, answerer_name, date, helpfulness, id, photos
  } = answer;

  const [reported, setReported] = useState(localStorage.getItem(`reported-${id}`));
  const [helpful, setHelpful] = useState(localStorage.getItem(`answer-${id}`));
  const [openModal, setOpenModal] = useState(false);
  const [currentModalImg, setCurrentModalImg] = useState('');

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

  function helpfulA(id) {
    if (helpful === false) {
      axios.put(`/qa/answers/${id}/helpful`)
        .then(() => {
          localStorage.setItem(`answer-${id}`, true);
        })
        .then(() => setHelpful(true))
        .then(() => loadData())
        .catch((err) => console.error(err));
    }
  }

  function handleReport(id) {
    if (reported === false) {
      axios.put(`/qa/answers/${id}/report`)
        .then(() => localStorage.setItem(`reported-${id}`, true));
    }
  }

  return (
    <div>
      <div className="answer">
        A: <p className="aBody">{body}</p>
      </div>
      <div className="answerPhotos">
        {photos.map((url) => (
          <div key={url}>
            <img
              className="img-container"
              src={url}
              alt="user uploaded"
              onClick={() => {
                setOpenModal(true);
                setCurrentModalImg(url);
              }}
            />
            {/* {openModal && <PhotoModal url={url} closeModal={setOpenModal} />} */}
          </div>
        ))}
        {openModal && (
          <PhotoModal url={currentModalImg} closeModal={setOpenModal} />
        )}
      </div>
      <div className="answerDetails">
        by {answerer_name}, {modDate} | Helpful?
        <button
          className="helpfulA"
          type="button"
          onClick={() => helpfulA(id)}
        >
          <u>Yes</u>
        </button>
        {' ('}
        {helpfulness}
        {') '}|{' '}
        <button
          type="button"
          className="qnaReport"
          onClick={() => {
            handleReport(id);
            setReported(true);
          }}
        >
          <u>{reported ? 'reported' : 'report'}</u>
        </button>
        <hr className="answerLineBreak" />
      </div>
    </div>
  );
}

export default AnswersCards;
