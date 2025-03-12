import React, { useState } from 'react';
import './feedback.css';

// FeedbackModal component will display a feedback form
const FeedbackModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
     
        <textarea placeholder="Write your feedback here..." rows="6" cols="55" />
        <br />
        <div className="button-container">
          <button onClick={onClose} className="close-button">Close</button>
          <button type="submit" className="submit-button">Submit</button>
        </div>
      </div>
    </div>
  );
};

const FeedbackButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="feedback-container">
      <button onClick={handleOpenModal} className="feedback-button">Give Feedback</button>
      <FeedbackModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default FeedbackButton;
