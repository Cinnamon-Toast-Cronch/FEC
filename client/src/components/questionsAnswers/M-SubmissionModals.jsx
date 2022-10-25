import React from 'react';

const { useState } = React;

function SubModals(props) {
  const { closeModal, question, productName, handleSubmit } = props;

  const { question_body } = question;

  const [subText, setSubText] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="qna-modal-background">
      <div className="qna-modal-container">
        <div className="qna-modalClose">
          <button
            type="button"
            className="qna-modalBtn"
            onClick={() => closeModal(false)}
          >
            close
          </button>
        </div>
        {question_body ? (
          <div>
            <div className="qna-modal-title">
              Submit your answer:
            </div>
            <div className="qna-modal-subtitle">
              {productName}
              :
              {' '}
              {question_body}
            </div>
          </div>
        ) : (
          <div>
            <div className="qna-modal-title">
              Ask your question about the
              {' '}
              {productName}
            </div>
          </div>
        )}
        <div className="qna-modal-body">
          <form
            className="modalSubmitForm"
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit(subText, userName, email);
            }}
          >
            <div className="modalQnA">
              <input
                className="modalQnaSubmit"
                name="textSubmit"
                type="text"
                placeholder={question_body ? 'type your answer here' : 'type your question here'}
                maxLength={1000}
                value={subText}
                onChange={(event) => setSubText(event.target.value)}
                required
              />
            </div>
            <div className="qna-modalNickname">
              Nickname:
              <br />
              <input
                className="qna-modalInput"
                name="nicknameSubmit"
                type="text"
                placeholder={question_body ? 'example: jack543!' : 'example: Jackson11!'}
                maxLength={60}
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
                required
              />
              <br />
              For privacy reasons, do not use your full name or email address
            </div>
            <div className="qna-modalEmail">
              Email:
              <br />
              <input
                className="qna-modalInput"
                name="emailSubmit"
                type="email"
                placeholder={question_body ?'example: jack@email.com' : 'Why do you like the product or not?'}
                maxLength={60}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <br />
              For authentication reasons, you will not be emailed
            </div>
            {question_body ? (
              <div className="qna-photoSubmit">
                Submit photos:
                {/* TODO */}
              </div>
            ) : ('')}
            <button
              className="qna-modalSubmit"
              type="submit"
            >
              {question_body ? 'Submit Answer' : 'Submit Question'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SubModals;
