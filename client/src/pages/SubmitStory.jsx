import React, { useState, useContext } from 'react';
import { createStoryWithUrl } from '../api';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const SubmitStory = () => {
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title,
      content,
      tags: tags.split(',').map(t => t.trim()),
      author: user.email,
      imageUrl
    };

    try {
      await createStoryWithUrl(payload);
      navigate('/profile');
    } catch (err) {
      console.error('Submission failed:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-2xl border border-gray-200">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          ✍️ Share Your Travel Story
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Story Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <textarea
            placeholder="Describe your journey..."
            value={content}
            onChange={e => setContent(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="text"
            value={user.email}
            disabled
            className="w-full border border-gray-300 p-3 rounded-lg bg-gray-100 text-gray-600"
          />

          <input
            type="text"
            placeholder="Image URL (optional)"
            value={imageUrl}
            onChange={e => setImageUrl(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {imageUrl && (
            <div className="mt-2">
              <img
                src={imageUrl}
                alt="Preview"
                className="w-full h-48 object-cover rounded-lg border border-gray-300"
              />
            </div>
          )}

          <input
            type="text"
            placeholder="Tags (comma-separated)"
            value={tags}
            onChange={e => setTags(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            🚀 Submit Story
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitStory;