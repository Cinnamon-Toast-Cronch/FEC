import React from 'react';
import ReviewImageUpload from '../ratingsReviews/ReviewImageUpload.jsx';

const { useState, useEffect } = React;

function SubModals(props) {
  const {
    closeModal, question, productName, handleSubmit,
  } = props;

  const { question_body } = question;

  const [subText, setSubText] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);

  function addImage(url) {
    if (photos.length <= 5) {
      setPhotos([...photos, url]);
    }
  }

  useEffect(() => {
    const noScrollClass = 'no-scroll';

    document.body.classList.add(noScrollClass);

    return () => document.body.classList.remove(noScrollClass);
  }, []);

  return (
    <div className="qna-modal-background">
      <div className="qna-modal-container">
        <div className="qna-modalClose">
          <button
            type="button"
            className="review-list-button"
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
              handleSubmit(subText, userName, email, photos);
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
              <p className="qna-modalText">Nickname:</p>
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
              <p className="qna-modalText">Email:</p>
              <input
                className="qna-modalInput"
                name="emailSubmit"
                type="email"
                placeholder={question_body ? 'example: jack@email.com' : 'Why do you like the product or not?'}
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
                <p className="qna-modalText">Submit photos:</p>
                <ReviewImageUpload
                  addImage={addImage}
                />
                <br />
                {photos.length ? (
                  photos.map((url) => (
                    <img
                      src={url}
                      alt="User uploaded"
                      key={url}
                      className="imagePreview"
                    />
                  ))) : (
                    <br />
                )}
              </div>
            ) : ('')}
            <button
              className="review-list-button"
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
