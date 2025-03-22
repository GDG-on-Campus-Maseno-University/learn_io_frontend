import React from "react";

const CourseCard = ({
  course,
  index,
  expanded,
  onToggle,
  onModify,
  onAddLesson,
}) => {
  return (
    <div className="course-card">
      <div className="course-header" onClick={() => onToggle(index)}>
        <div>
          <h2>{course.name}</h2>
          <p className="course-code">
            <strong>Code:</strong> {course.code}
          </p>
        </div>
        <button className="toggle-lessons-btn">
          {expanded ? "Hide Lessons" : "Show Lessons"}
        </button>
      </div>
      <p className="course-description">{course.description}</p>
      <div className="course-info">
        <p>
          <strong>Title:</strong> {course.title}
        </p>
        <p>
          <strong>Period:</strong> {course.period}
        </p>
        <p>
          <strong>Instructor:</strong> {course.instructor}
        </p>
      </div>
      <div className="course-actions">
        <button className="secondary-btn" onClick={(e) => { e.stopPropagation(); onModify(index); }}>
          Modify Course
        </button>
        <button className="secondary-btn" onClick={(e) => { e.stopPropagation(); onAddLesson(index); }}>
          Add Lesson
        </button>
      </div>
      {expanded && course.lessons && course.lessons.length > 0 && (
        <div className="lessons-dropdown">
          {course.lessons.map((lesson, lIndex) => (
            <div key={lIndex} className="lesson-card">
              <div className="lesson-header">
                <strong>{lesson.title}</strong>
                <em>{lesson.subtitle}</em>
              </div>
              <p className="lesson-content">{lesson.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseCard;
