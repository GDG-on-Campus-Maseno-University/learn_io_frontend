import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import '../styles/Articles.css'; // Make sure this file exists

const Articles = () => {
  // State management
  const [formData, setFormData] = useState({
    title: '',
    body: ''
  });
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle file selection with validation
  const handleFileChange = (e) => {
    try {
      const selectedFile = e.target.files[0];
      if (!selectedFile) return;

      // Validate file type and size
      const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
      if (!validTypes.includes(selectedFile.type)) {
        throw new Error('Only JPEG, PNG, or WebP images are allowed');
      }
      
      if (selectedFile.size > 5 * 1024 * 1024) {
        throw new Error('File size must be less than 5MB');
      }

      setFile(selectedFile);
      setError(null);

      // Create preview
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result);
      reader.onerror = () => { throw new Error('Failed to read file') };
      reader.readAsDataURL(selectedFile);
    } catch (err) {
      setError(err.message);
      setFile(null);
      setPreview('');
      e.target.value = ''; // Reset file input
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      // Validate inputs
      if (!formData.title.trim()) throw new Error('Title is required');
      if (!formData.body.trim()) throw new Error('Content is required');
      if (formData.body.trim().length < 100) {
        throw new Error('Content should be at least 100 characters');
      }

      setIsSubmitting(true);

      // Prepare form data
      const submissionData = new FormData();
      submissionData.append('title', formData.title);
      submissionData.append('body', formData.body);
      if (file) submissionData.append('file', file);

      // Get auth token
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login', { state: { from: location.pathname } });
        return;
      }

      // Submit to API
      const response = await axios.post('http://localhost:3000/api/articles', submissionData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        },
        timeout: 10000 // 10 second timeout
      });

      // Handle success
      if (response.status === 201) {
        navigate(`/articles/${response.data._id}`, {
          state: { 
            success: true,
            message: 'Article published successfully!' 
          }
        });
      }
    } catch (err) {
      console.error('Submission error:', err);
      setError(
        err.response?.data?.message || 
        err.message || 
        'An unexpected error occurred. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Remove selected image
  const removeImage = () => {
    setFile(null);
    setPreview('');
    document.getElementById('fileInput').value = ''; // Reset file input
  };

  // Animation for spinner
  const spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  `;

  // Styled Components
  const CharCount = styled.span`
    font-size: 0.8rem;
    color: ${props => props.$invalid ? '#dc3545' : '#6c757d'};
    align-self: flex-end;
  `;

  return (
    <div className="article-container">
      <div className="article-card">
        <div className="article-header">
          <h1>Create New Article</h1>
          <p>Share your knowledge with the world</p>
        </div>

        {error && (
          <div className="error-message">
            <i className="fas fa-exclamation-triangle"></i>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="article-form">
          <div className="form-group">
            <label htmlFor="title">Article Title*</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter your article title"
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="body">Article Content*</label>
            <textarea
              id="body"
              name="body"
              value={formData.body}
              onChange={handleInputChange}
              placeholder="Write your article content here (minimum 100 characters)..."
              minLength="100"
              required
              className="form-textarea"
            />
            <CharCount $invalid={formData.body.length < 100}>
              {formData.body.length}/100 minimum characters
            </CharCount>
          </div>

          <div className="form-group">
            <label htmlFor="fileInput" className="file-upload-label">
              <i className="fas fa-cloud-upload-alt"></i>
              <span>{file ? file.name : 'Upload Featured Image (Optional)'}</span>
              <input 
                type="file" 
                id="fileInput"
                onChange={handleFileChange}
                accept="image/*"
                hidden
              />
            </label>
            
            {preview && (
              <div className="image-preview">
                <img src={preview} alt="Preview" />
                <button type="button" onClick={removeImage} className="remove-button">
                  <i className="fas fa-times"></i> Remove
                </button>
              </div>
            )}
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting} 
            className="submit-button"
          >
            {isSubmitting ? (
              <>
                <i className="fas fa-spinner" style={{ animation: `${spin} 1s linear infinite` }}></i>
                Publishing...
              </>
            ) : (
              <>
                <i className="fas fa-paper-plane"></i> Publish Article
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Articles;