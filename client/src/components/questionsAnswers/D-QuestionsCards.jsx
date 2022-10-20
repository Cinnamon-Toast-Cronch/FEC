import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import AnswersCards from './E-AnswersCards.jsx';
import SubModals from './M-SubmissionModals.jsx';

const { useState, useEffect } = React;

function QuestionsCards(props) {
  const { question, productName } = props;
  const [answers, setAnswers] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const { question_body, question_id, question_helpfulness } = question;

  useEffect(() => {
    axios.get(`/qa/questions/${question_id}/answers`)
      .then((response) => setAnswers(response.data.results));
  }, []);

  // TODO: HANDLE PHOTOS IN AXIOS POST REQUEST
  function handleSubmit(text, nickname, userEmail) {
    const body = {
      body: text,
      name: nickname,
      email: userEmail,
      photos: ['placeholder'],
    };
    axios.post(`/qa/questions/${question_id}/answers`, body)
      .then((response) => {
        console.log('success! ', response);
      })
      .catch((err) => console.log(err))
      .then(() => setOpenModal(false));
  }

  return (
    <div>
      <div className="qBody">
        Q:
        {question_body}
      </div>
      <div className="qButtons">
        helpful?
        <u>yes</u>
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
        handleSubmit={handleSubmit}
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
