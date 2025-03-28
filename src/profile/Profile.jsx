
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./Profile.css";
import img from "./john.png";
// Sample user data dictionary with expanded fields
const sampleUserData = {
  1: {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    profilePicture: img,
    bio: "Software Engineer passionate about React and web development",
    phoneNumber: "+254798863351",
    school: "Tech University",
    speciality: "Web Development",
  },
};

const Profile = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [profilePicturePreview, setProfilePicturePreview] = useState(null);

  // Simulate fetching user data when component mounts
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userId = 1;
        const userData = sampleUserData[userId];

        if (userData) {
          setUser(userData);
          setProfilePicturePreview(userData.profilePicture);

          // Dynamically set values for all fields
          Object.entries(userData).forEach(([key, value]) => {
            if (key !== "id") {
              setValue(key, value);
            }
          });
        } else {
          console.error("User not found");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [setValue]);

  // Handle profile update
  const onSubmit = async (data) => {
    try {
      // Simulate updating user data
      const updatedUser = {
        ...user,
        ...data,
        profilePicture: profilePicturePreview || user.profilePicture,
      };
      setUser(updatedUser);

      // Update the sample data dictionary
      sampleUserData[user.id] = updatedUser;

      setIsEditing(false);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  // Handle cancel editing
  const handleCancel = () => {
    // Reset form to original user data
    if (user) {
      Object.entries(user).forEach(([key, value]) => {
        if (key !== "id") {
          setValue(key, value);
        }
      });
      setProfilePicturePreview(user.profilePicture);
    }
    setIsEditing(false);
  };

  // Custom validation for phone number
  const validatePhoneNumber = (value) => {
    const phoneRegex = /^\+254\d{9}$/;
    return (
      phoneRegex.test(value) ||
      "Phone number must start with +254 followed by 9 digits"
    );
  };

  // Handle profile picture change
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicturePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-picture-section">
          <div className="profile-picture-wrapper">
            <img
              src={profilePicturePreview || user?.profilePicture}
              alt="Profile"
              className="profile-picture"
            />
            {isEditing && (
              <div className="change-photo-container">
                <input
                  type="file"
                  id="profile-picture-input"
                  accept="image/*"
                  className="profile-picture-input"
                  onChange={handleProfilePictureChange}
                />
                <label
                  htmlFor="profile-picture-input"
                  className="change-photo-btn"
                >
                  Change Photo
                </label>
              </div>
            )}
          </div>
        </div>

        <div className="profile-actions">
          {!isEditing ? (
            <button
              type="button"
              className="btn btn-edit"
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </button>
          ) : (
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-save"
                onClick={handleSubmit(onSubmit)}
              >
                Save Changes
              </button>
              <button
                type="button"
                className="btn btn-cancel"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>

      {user && (
        <form className="profile-form">
          <div className="form-columns">
            <div className="form-column">
              {["name", "email", "phoneNumber", "school"].map((key) => (
                <div key={key} className="form-group">
                  <label className="form-label">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                  <input
                    {...register(key, {
                      required: `${key.charAt(0).toUpperCase() + key.slice(1)} is required`,
                      ...(key === "email" && {
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Invalid email address",
                        },
                      }),
                      ...(key === "phoneNumber" && {
                        validate: validatePhoneNumber,
                      }),
                    })}
                    className="form-input"
                    disabled={!isEditing}
                  />
                  {errors[key] && (
                    <p className="error-message">{errors[key].message}</p>
                  )}
                </div>
              ))}
            </div>
            <div className="form-column">
              {["speciality", "bio"].map((key) => (
                <div key={key} className="form-group">
                  <label className="form-label">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                  {key === "bio" ? (
                    <textarea
                      {...register(key, {
                        required: `${key.charAt(0).toUpperCase() + key.slice(1)} is required`,
                      })}
                      className="form-input"
                      disabled={!isEditing}
                      rows="4"
                    />
                  ) : (
                    <input
                      {...register(key, {
                        required: `${key.charAt(0).toUpperCase() + key.slice(1)} is required`,
                      })}
                      className="form-input"
                      disabled={!isEditing}
                    />
                  )}
                  {errors[key] && (
                    <p className="error-message">{errors[key].message}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Profile;

