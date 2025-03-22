import React, { useState, useEffect } from "react";

const CourseModal = ({ initialData, onSubmit, onCancel }) => {
  const [courseData, setCourseData] = useState({
    code: "",
    name: "",
    title: "",
    period: "",
    description: "",
    instructor: "",
  });

  useEffect(() => {
    if (initialData) {
      setCourseData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) =>
    setCourseData({ ...courseData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(courseData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{initialData ? "Modify Course" : "Add Course"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="code"
            placeholder="Course Code"
            value={courseData.code}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Course Name"
            value={courseData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="title"
            placeholder="Course Title"
            value={courseData.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="period"
            placeholder="Period"
            value={courseData.period}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={courseData.description}
            onChange={handleChange}
            required
          ></textarea>
          <input
            type="text"
            name="instructor"
            placeholder="Instructor Name"
            value={courseData.instructor}
            onChange={handleChange}
            required
          />
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

export default CourseModal;
