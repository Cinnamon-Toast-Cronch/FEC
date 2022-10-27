import React from 'react';

const { useEffect } = React;

function PhotoModal(props) {
  const { closeModal, url } = props;

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
            className="qna-modalBtn"
            onClick={() => closeModal(false)}
          >
            close
          </button>
        </div>
        <div className="qna-modal-body">
          <img src={url} alt="user-uploaded" />
        </div>
      </div>
    </div>
  );
}

export default PhotoModal;
