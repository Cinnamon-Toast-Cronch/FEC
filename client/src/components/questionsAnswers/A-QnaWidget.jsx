/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React from 'react';
import axios from 'axios';
import Search from './B-Search.jsx';
import QuestionsList from './C-QuestionsList.jsx';
import SubModals from './M-SubmissionModals.jsx';

const { useState, useEffect } = React;

function QnaWidget(props) {
  const [search, setSearch] = useState('');
  const [questions, setQuestions] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [noQs, setNoQs] = useState(4);
  const [displayedQs, setDisplayedQs] = useState([]);
  const [searchedQs, setSearchedQs] = useState([]);

  const { product } = props;
  const productId = product.id;
  const productName = product.name;
  const dummyQuestion = { question_body: false };

  function loadData() {
    const queryParams = {
      params: {
        product_id: productId,
        page: 1,
        count: 500,
      },
    };
    axios.get('/qa/questions', queryParams)
      .then((response) => {
        setQuestions(response.data.results);
        setDisplayedQs(response.data.results.slice(0, noQs));
      });
  }

  function handleSearch(searchEntry) {
    if (searchEntry.length >= 3) {
      const temp = [];
      for (let i = 0; i < questions.length; i += 1) {
        if (questions[i].question_body.includes(searchEntry)) {
          temp.push(questions[i]);
        }
      }
      setSearchedQs(temp);
      setDisplayedQs(temp.slice(0, noQs));
    } else if (searchEntry.length === 2) {
      setDisplayedQs(questions.slice(0, noQs));
    }
  }

  useEffect(() => {
    setNoQs(4);
  }, [product]);

  useEffect(() => {
    if (search.length <= 2) {
      loadData();
    } else {
      handleSearch(search);
    }
  }, [product, noQs]);

  useEffect(() => {
    handleSearch(search);
  }, [search]);

  function handleModalSubmit(text, nickname, userEmail) {
    const body = {
      body: text,
      name: nickname,
      email: userEmail,
      product_id: productId,
    };
    axios.post('/qa/questions', body)
      .then(() => {
        setOpenModal(false);
      })
      .catch((err) => console.error(err))
      .then(() => loadData());
  }

  return (
    <div className="qnaApp">
      <h1
        className="qna-title"
      >
        QUESTIONS &amp; ANSWERS
      </h1>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      <QuestionsList
        className="questionsList"
        product={props}
        productName={productName}
        noQs={noQs}
        questions={questions}
        displayedQs={displayedQs}
        loadData={loadData}
      />
      <button
        className="review-list-button"
        type="button"
        onClick={() => setNoQs(noQs + 2)}
      >
        MORE ANSWERED QUESTIONS
      </button>
      <button
        className="review-list-button"
        type="button"
        onClick={() => setOpenModal(true)}
      >
        ADD A QUESTION  +
      </button>
      {openModal && (
        <SubModals
          productName={productName}
          closeModal={setOpenModal}
          handleSubmit={handleModalSubmit}
          question={dummyQuestion}
        />
      )}
    </div>
  );
}

export default QnaWidget;
