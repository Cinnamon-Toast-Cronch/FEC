import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import AnswersCards from './E-AnswersCards.jsx';
import SubModals from './M-SubmissionModals.jsx';

const { useState, useEffect } = React;

function QuestionsCards(props) {
  const { question, productName, loadData } = props;
  const { question_body, question_id, question_helpfulness } = question;

  const [answers, setAnswers] = useState([]);
  const [noAs, setNoAs] = useState(2);
  const [moreAs, setMoreAs] = useState(false);
  const [displayedAs, setDisplayedAs] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [helpful, setHelpful] = useState(localStorage.getItem(`question-${question_id}`));

  function loadAnswers() {
    axios.get(`/qa/questions/${question_id}/answers`)
      .then((response) => {
        setAnswers(response.data.results);
        setDisplayedAs(response.data.results.slice(0, noAs));
      })
      .then(() => {
        if (helpful === null) {
          setHelpful(false);
        }
      });
  }

  // EXECUTES ON RENDER
  useEffect(() => {
    loadAnswers();
  }, [moreAs]);

  // TODO write callback
  function helpfulQ(question_id) {
    if (helpful === false) {
      axios.put(`/qa/questions/${question_id}/helpful`)
        .then(() => {
          localStorage.setItem(`question-${question_id}`, true);
        })
        .then(() => setHelpful(true))
        .then(() => loadData());
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
    <div className="questionsCards">
      <div className="questionsView">
        <div className="question">
          Q:
          {' '}
          <p className="qBody">{question_body}</p>
        </div>
        <div className="qButtons">
          helpful?
          <button
            className="helpfulQBtn"
            type="button"
            onClick={() => helpfulQ(question_id)}
          >
            <u>yes</u>
          </button>
          {' ('}
          {question_helpfulness}
          {') '}
          |
          {' '}
          <button
            type="button"
            className="addABtn"
            onClick={() => setOpenModal(true)}
          >
            <u>Add answer</u>
          </button>
        </div>
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
        {displayedAs.map((answer, i) => (
          <AnswersCards
            className="answersCards"
            loadAnswers={loadAnswers}
            answer={answer}
            i={i}
            key={i}
          />
        ))}
      </div>
      {answers.length > 2 ? (
        <button
          type="button"
          className="moreAs"
          onClick={() => {
            if (moreAs === false) {
              setNoAs(answers.length);
            } else {
              setNoAs(2);
            }
            setMoreAs(!moreAs);
          }}
        >
          {moreAs ? 'COLLAPSE ANSWERS' : 'LOAD MORE ANSWERS'}
        </button>
      ) : (<div className="moreAsAlt">No more answers have been submitted</div>)}
    </div>
  );
}

export default QuestionsCards;
