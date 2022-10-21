import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import AnswersCards from './E-AnswersCards.jsx';
import SubModals from './M-SubmissionModals.jsx';

const { useState, useEffect } = React;

function QuestionsCards(props) {
  const { question, productName } = props;
  const { question_body, question_id, question_helpfulness } = question;

  const [answers, setAnswers] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [helpful, setHelpful] = useState(localStorage.getItem(`question-${question_id}`));

  // EXECUTES ON RENDER
  useEffect(() => {
    axios.get(`/qa/questions/${question_id}/answers`)
      .then((response) => setAnswers(response.data.results))
      .then(() => {
        if (helpful === null) {
          setHelpful(false);
        }
      });
  }, []);

  // TODO write callback
  function helpfulQ(question_id) {
    if (helpful === false) {
      axios.put(`/qa/questions/${question_id}/helpful`)
        .then(() => {
          localStorage.setItem(`question-${question_id}`, true);
        })
        .then(() => setHelpful(true));
    }
  }

  // TODO: HANDLE PHOTOS IN AXIOS POST REQUEST
  function handleModalSubmit(text, nickname, userEmail) {
    const body = {
      body: text,
      name: nickname,
      email: userEmail,
      photos: ['placeholder'],
    };
    axios.post(`/qa/questions/${question_id}/answers`, body)
      .then(() => {
        setOpenModal(false);
      })
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <div className="qBody">
        Q:
        {question_body}
      </div>
      <div className="qButtons">
        helpful?
        <button
          type="button"
          onClick={() => helpfulQ(question_id)}
        >
          <u>yes</u>
        </button>
        {' '}
        {question_helpfulness}
        {' '}
        |
        {' '}
        <button
          type="button"
          className="openModal"
          onClick={() => setOpenModal(true)}
        >
          <u>Add answer</u>
        </button>
      </div>
      {openModal && (
      <SubModals
        closeModal={setOpenModal}
        question={question}
        productName={productName}
        handleSubmit={handleModalSubmit}
      />
      )}
      <div className="answers">
        {answers.map((answer, i) => (
          <AnswersCards
            className="answersCards"
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

export default QuestionsCards;
