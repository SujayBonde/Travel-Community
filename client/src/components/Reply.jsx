import React from 'react';

const Reply = ({ author, content, createdAt }) => {
  return (
    <div className="border p-4 rounded">
      <div className="text-sm text-gray-600">
        <strong>{author}</strong> · {new Date(createdAt).toLocaleString()}
      </div>
      <p className="mt-1 text-gray-800">{content}</p>
    </div>
  );
};

export default Reply;