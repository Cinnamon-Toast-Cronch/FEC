import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import AnswersCards from './E-AnswersCards.jsx';
import SubModals from './M-SubmissionModals.jsx';

const { useState, useEffect } = React;

function QuestionsCards(props) {
  const {
    question, productName, loadData, displayedQs, i
  } = props;
  const { question_body, question_id, question_helpfulness, answers } = question;

  const [answersArray, setAnswersArray] = useState([]);
  const [moreAs, setMoreAs] = useState(false);
  const [displayedAs, setDisplayedAs] = useState(Object.values(answers).slice(0, 2));
  const [openModal, setOpenModal] = useState(false);
  const [helpful, setHelpful] = useState(localStorage.getItem(`question-${question_id}`));

  // function loadAnswers() {
  //   const params = {
  //     params: {
  //       page: 1,
  //       count: 25,
  //     },
  //   };

  //   axios.get(`/qa/questions/${question_id}/answers`, params)
  //     .then((response) => {
  //       setAnswers(response.data.results);
  //       setDisplayedAs(response.data.results.slice(0, noAs));
  //     })
  //     .then(() => {
  //       if (helpful === null) {
  //         setHelpful(false);
  //       }
  //     });
  // }

  useEffect(() => {
    console.log('question is changed!', answersArray);
    if (helpful === null) {
      setHelpful(false);
    }
    setAnswersArray((Object.values(answers)));
    setDisplayedAs((Object.values(answers).slice(0, 2)));
    //loadAnswers();
  }, [displayedQs]);

  function helpfulQ(question_id) {
    if (helpful === false) {
      axios.put(`/qa/questions/${question_id}/helpful`)
        .then((response) => {
          console.log(response);
          localStorage.setItem(`question-${question_id}`, true);
        }).then(() => setHelpful(true)).then(() => loadData());
    }
  }

  // TODO: HANDLE PHOTOS IN AXIOS POST REQUEST
  function handleModalSubmit(text, nickname, userEmail, photos) {
    const body = {
      body: text,
      name: nickname,
      email: userEmail,
      photos,
    };
    axios.post(`/qa/questions/${question_id}/answers`, body)
      .then(() => {
        setOpenModal(false);
      })
      .catch((err) => console.error(err))
      .then(() => loadData());
    // .then(() => loadAnswers());
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
          Helpful?
          <button
            className="helpfulQBtn"
            type="button"
            onClick={() => helpfulQ(question_id)}
          >
            <u>Yes</u>
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
            loadData={loadData}
            // loadAnswers={loadAnswers}
            answer={answer}
            i={i}
            key={i}
          />
        ))}
      </div>
      {answersArray.length > 2 ? (
        <button
          type="button"
          className="moreAs"
          onClick={() => {
            if (moreAs === false) {
              setDisplayedAs(answersArray);
            } else {
              setDisplayedAs(Object.values(answers).slice(0, 2));
            }
            setMoreAs(!moreAs);
          }}
        >
          {moreAs ? 'COLLAPSE ANSWERS' : 'LOAD MORE ANSWERS' }
        </button>
      ) : (<div className="moreAsAlt">No more answers have been submitted</div>)}
    </div>
  );
}

export default QuestionsCards;
