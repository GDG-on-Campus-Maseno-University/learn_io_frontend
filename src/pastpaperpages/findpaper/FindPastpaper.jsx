import React from "react";
import "./FindPastpaper.css";

function Find() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle form submission
        console.log("Find Papers button clicked");
    };

    return (
        <div className="plain-form">
            <h2>Find Past Papers</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Select Course:
                    <select required>
                        <option value="">--Select Course--</option>
                        <option value="course1">Course 1</option>
                        <option value="course2">Course 2</option>
                        <option value="course3">Course 3</option>
                    </select>
                </label>
                <br />
                <label>
                    Select Year of Study:
                    <select required>
                        <option value="">--Select Year of Study--</option>
                        <option value="1">Year 1</option>
                        <option value="2">Year 2</option>
                        <option value="3">Year 3</option>
                        <option value="4">Year 4</option>
                    </select>
                </label>
                <br />
                <label>
                    Select Exam Year:
                    <select required>
                        <option value="">--Select Exam Year--</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                    </select>
                </label>
                <br />
                <button type="submit">Find Papers</button>
            </form>
        </div>
    );
}

export default Find;