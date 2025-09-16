import React, { useState, useEffect } from 'react';
import { fetchStories } from '../api';
import StoryCard from '../components/StoryCard';

const Stories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetchStories()
      .then(res => setStories(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stories.map(s => (
        <StoryCard
          key={s._id}
          title={s.title}
          content={s.content}
          imageUrl={s.imageUrl}
          author={s.author}
          createdAt={s.createdAt}
          tags={s.tags}
        />
      ))}
    </div>
  );
};

export default Stories;