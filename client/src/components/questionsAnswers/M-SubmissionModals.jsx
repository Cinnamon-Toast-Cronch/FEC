import React from 'react';

const { useState } = React;

function SubModals(props) {
  const { closeModal, question, productName, handleSubmit } = props;

  const { question_body } = question;

  const [subText, setSubText] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modalBtn">
          <button
            type="button"
            className="modalBtn"
            onClick={() => closeModal(false)}
          >
            X
          </button>
        </div>
        {question_body ? (
          <div>
            <div className="modal-title">
              Submit your answer
            </div>
            <div>
              {productName}
              :
              {' '}
              {question_body}
            </div>
          </div>
        ) : (
          <div>
            <div className="modal-title">
              Ask your question about the
              {' '}
              {productName}
            </div>
          </div>
        )}
        <div className="modal-body">
          <form
            className="modalSubmitForm"
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit(subText, userName, email);
            }}
          >
            <div className="modalQnA">
              {question_body ? 'Your answer' : 'Your question'}
              :
              <br />
              <input
                name="textSubmit"
                type="text"
                placeholder={question_body ? 'type your answer here' : 'type your question here'}
                maxLength={1000}
                value={subText}
                onChange={(event) => setSubText(event.target.value)}
                required
              />
            </div>
            <div className="modalNickname">
              Nickname:
              <br />
              <input
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
            <div className="modalEmail">
              Email:
              <br />
              <input
                name="emailSubmit"
                type="text"
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
              <div>
                Submit photos:
                {/* TODO */}
              </div>
            ) : ('')}
            <button type="submit">
              {question_body ? 'Submit Answer' : 'Submit Question'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SubModals;
