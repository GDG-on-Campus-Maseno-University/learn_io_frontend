import React, { useState } from "react";
import CourseCard from "./CourseCard";
import CourseModal from "./CourseModal";
import LessonModal from "./LessonModal";
import "../styles/InstructorPage.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

const InstructorPage = () => {
  const [courses, setCourses] = useState([]);
  const [expandedCourses, setExpandedCourses] = useState({});
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [showLessonModal, setShowLessonModal] = useState(false);
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(null);
  const [courseToModify, setCourseToModify] = useState(null);

  const toggleCourseExpansion = (index) => {
    setExpandedCourses((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleAddCourse = (courseData) => {
    const newCourse = { ...courseData, lessons: [] };
    setCourses([...courses, newCourse]);
    setShowCourseModal(false);
  };

  const handleUpdateCourse = (updatedCourse) => {
    const updatedCourses = [...courses];
    updatedCourses[selectedCourseIndex] = {
      ...updatedCourses[selectedCourseIndex],
      ...updatedCourse,
    };
    setCourses(updatedCourses);
    setShowCourseModal(false);
    setCourseToModify(null);
    setSelectedCourseIndex(null);
  };

  const handleAddLesson = (lessonData) => {
    if (selectedCourseIndex === null) return;
    const updatedCourses = [...courses];
    updatedCourses[selectedCourseIndex].lessons.push(lessonData);
    setCourses(updatedCourses);
    setShowLessonModal(false);
    setSelectedCourseIndex(null);
  };

  const openAddCourseModal = () => {
    setCourseToModify(null);
    setShowCourseModal(true);
  };

  const openModifyCourseModal = (index) => {
    setSelectedCourseIndex(index);
    setCourseToModify(courses[index]);
    setShowCourseModal(true);
  };

  const openLessonModal = (index) => {
    setSelectedCourseIndex(index);
    setShowLessonModal(true);
  };

  return (
    <>
   <Header/>
    <div className="instructor-page">
      <h1>Instructor Dashboard</h1>
      <div className="action-buttons">
        <button className="primary-btn" onClick={openAddCourseModal}>
          Add Course
        </button>
      </div>
      <div className="courses-container">
        {courses.length === 0 && (
          <p className="no-courses">No courses added yet.</p>
        )}
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            course={course}
            index={index}
            expanded={expandedCourses[index]}
            onToggle={toggleCourseExpansion}
            onModify={openModifyCourseModal}
            onAddLesson={openLessonModal}
          />
        ))}
      </div>
      {showCourseModal && (
        <CourseModal
          initialData={courseToModify}
          onSubmit={courseToModify ? handleUpdateCourse : handleAddCourse}
          onCancel={() => {
            setShowCourseModal(false);
            setCourseToModify(null);
            setSelectedCourseIndex(null);
          }}
        />
      )}
      {showLessonModal && (
        <LessonModal
          onSubmit={handleAddLesson}
          onCancel={() => {
            setShowLessonModal(false);
            setSelectedCourseIndex(null);
          }}
        />
      )}
    </div>
    <Footer/>
    </>
  );
};

export default InstructorPage;
