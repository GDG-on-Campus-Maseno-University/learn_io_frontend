import React, { useState } from "react";

const LessonModal = ({ onSubmit, onCancel }) => {
  const [lessonData, setLessonData] = useState({
    title: "",
    subtitle: "",
    content: "",
  });

  const handleChange = (e) =>
    setLessonData({ ...lessonData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(lessonData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add Lesson</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Lesson Title"
            value={lessonData.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subtitle"
            placeholder="Lesson Subtitle"
            value={lessonData.subtitle}
            onChange={handleChange}
            required
          />
          <textarea
            name="content"
            placeholder="Content"
            value={lessonData.content}
            onChange={handleChange}
            required
          ></textarea>
          <div className="modal-buttons">
            <button type="submit" className="primary-btn">
              Submit
            </button>
            <button type="button" className="secondary-btn" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LessonModal;
