// client/src/components/ThreadForm.jsx

import React, { useState, useContext } from 'react';
import { createThread }      from '../api';
import { AuthContext }       from '../context/AuthContext';

const ThreadForm = ({ onNewThread }) => {
  const { user } = useContext(AuthContext);
  const [title, setTitle]   = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const data = {
      title,
      content,
      author: user.email        // ← use user.email
    };
    try {
      const res = await createThread(data);
      onNewThread(res.data);
      setTitle('');
      setContent('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Thread title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="w-full border p-2 rounded"
        required
      />
      <textarea
        placeholder="Your question or topic..."
        value={content}
        onChange={e => setContent(e.target.value)}
        className="w-full border p-2 rounded h-24"
        required
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Post Thread
      </button>
    </form>
  );
};

export default ThreadForm;