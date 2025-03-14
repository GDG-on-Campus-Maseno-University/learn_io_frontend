import React from "react";
import styles from "../styles/lessonStyle.module.css";

const lessons = [
  { name: "java", image: "java" },
  { name: "php", image: "php" },
  { name: "kotlin", image: "kotlin" },
  { name: "cloud", image: "cloud" },
  { name: "flutter", image: "flutter" },
  { name: "django", image: "django" },
  { name: "angular", image: "angular" },
  { name: "react", image: "react" },
];

function  Lesson(){
    return(
        <div className={styles.overlay}>
            <div className={styles.lessonList}>
                {lessons.map((lesson, index) => (
                  <div key={index} className={styles.lesson}>
                    <img src={lesson.image} alt={lesson.name} className={styles.image}  />
                    <div className={styles.name}> {lesson.name}</div>
                  </div>
                ))}
            </div>
        </div>
    )
}

export default Lesson;