import React, { useState } from 'react';
import { postReply } from '../api';

const ReplyForm = ({ threadId, onNewReply }) => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await postReply(threadId, { author, content });
      onNewReply(res.data);
      setAuthor('');
      setContent('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        type="text"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        placeholder="Your name"
        className="w-full border p-2 rounded"
        required
      />
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Your reply..."
        className="w-full border p-2 rounded h-24"
        required
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Post Reply
      </button>
    </form>
  );
};

export default ReplyForm;