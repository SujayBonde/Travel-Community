import React from 'react';

const StoryCard = ({ title, content, imageUrl, author, createdAt, tags }) => (
  <div className="border rounded overflow-hidden shadow-md">
    {imageUrl && <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />}
    <div className="p-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">By {author} on {new Date(createdAt).toLocaleDateString()}</p>
      <p className="mt-2 text-gray-800">{content.slice(0, 100)}...</p>
      <div className="mt-2 space-x-2">
        {tags.map((tag, i) => <span key={i} className="text-xs bg-gray-200 px-2 py-1 rounded">#{tag}</span>)}
      </div>
    </div>
  </div>
);

export default StoryCard;