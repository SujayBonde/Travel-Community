import React, { useState, useEffect } from 'react';
import ForumThread from '../components/ForumThread';
import ThreadForm    from '../components/ThreadForm';
import { fetchThreads } from '../api';

const Forum = () => {
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState('');

  useEffect(() => {
    fetchThreads()
      .then(res => {
        setThreads(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load threads');
        setLoading(false);
      });
  }, []);

  const addThread = newThread => {
    setThreads([newThread, ...threads]);
  };

  if (loading) return <p className="p-6">Loading threads…</p>;
  if (error)   return <p className="p-6 text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Community Forum</h2>
      <ThreadForm onNewThread={addThread} />
      <div className="space-y-4 mt-6">
        {threads.map(t => (
          <ForumThread
            key={t._id}
            title={t.title}
            author={t.author}
            replies={t.replies.length}
            createdAt={t.createdAt}
          />
        ))}
      </div>
    </div>
  );
};

export default Forum;