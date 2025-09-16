import React from 'react';

const ForumThread = ({ title, author, replies, createdAt }) => {
  return (
    <div className="border p-4 rounded shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-blue-700">{title}</h3>
      <div className="text-sm text-gray-600 mt-1">
        <span>Posted by <strong>{author}</strong></span> · <span>{new Date(createdAt).toLocaleDateString()}</span>
      </div>
      <p className="mt-2 text-gray-700">{replies} replies</p>
    </div>
  );
};

export default ForumThread;