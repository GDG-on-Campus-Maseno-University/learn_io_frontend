/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { User, /**BookOpen,**/ Trophy, /**Settings**/ } from 'lucide-react';

const StudentProfile = () => {
  const [activeTab, setActiveTab] = useState('profile');

  // Sample student data (typically this would come from an API or global state)
  const studentData = {
    name: 'Alex Rodriguez',
    email: 'alex.rodriguez@learnhub.edu',
    major: 'Computer Science',
    graduationYear: 2026,
    profilePicture: null, // Placeholder for profile picture
    courses: [
      { code: 'CS101', name: 'Introduction to Programming', grade: 'A' },
      { code: 'MATH202', name: 'Advanced Calculus', grade: 'B+' },
      { code: 'PHYS150', name: 'Physics Fundamentals', grade: 'A-' }
    ],
    achievements: [
      'Dean\'s List 2023',
      'Coding Competition Winner',
      'Research Assistant'
    ]
  };

  const TabButton = ({ icon: Icon, label, tabName }) => (
    <button
      onClick={() => setActiveTab(tabName)}
      className={`flex-1 p-4 flex items-center justify-center space-x-2 ${
        activeTab === tabName 
          ? 'bg-[#FFA500] text-white' 
          : 'text-white/70 hover:bg-white/10'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
    </button>
  );

  const renderProfileTab = () => (
    <div className="bg-white/10 p-6 rounded-lg">
      <div className="flex items-center space-x-4 mb-6">
        {/* Profile Picture Placeholder */}
        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
          {studentData.profilePicture ? (
            <img 
              src={studentData.profilePicture} 
              alt={studentData.name} 
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <User className="w-16 h-16 text-white" />
          )}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">{studentData.name}</h2>
          <p className="text-white/70">{studentData.email}</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Academic Info</h3>
          <p className="text-white/80">Major: {studentData.major}</p>
          <p className="text-white/80">Graduation: {studentData.graduationYear}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Recent Courses</h3>
          {studentData.courses.map((course) => (
            <div 
              key={course.code} 
              className="flex justify-between text-white/80 mb-1"
            >
              <span>{course.code} - {course.name}</span>
              <span className="font-bold">{course.grade}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAchievementsTab = () => (
    <div className="bg-white/10 p-6 rounded-lg">
      <h3 className="text-2xl font-semibold text-white mb-4">Achievements</h3>
      <ul className="space-y-2">
        {studentData.achievements.map((achievement, index) => (
          <li 
            key={index} 
            className="flex items-center space-x-3 text-white/80"
          >
            <Trophy className="w-5 h-5 text-[#FFA500]" />
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div 
      className="min-h-screen p-8 flex items-center justify-center"
      style={{ backgroundColor: '#094E51' }}
    >
      <div className="w-full max-w-4xl bg-white/20 rounded-2xl shadow-2xl overflow-hidden">
        {/* Navigation Tabs */}
        <div 
          className="flex border-b border-white/20"
          style={{ backgroundColor: 'rgba(255,165,0,0.2)' }}
        >
          <TabButton 
            icon={User} 
            label="Profile" 
            tabName="profile" 
          />
          <TabButton 
            icon={Trophy} 
            label="Achievements" 
            tabName="achievements" 
          />
        </div>

        {/* Content Area */}
        <div className="p-8">
          {activeTab === 'profile' ? renderProfileTab() : renderAchievementsTab()}
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;