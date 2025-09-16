import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ForumThread from '../components/ForumThread';
import ReplyForm from '../components/ReplyForm';
import Reply from '../components/Reply';
import { fetchThreadById, postReply } from '../api';

const ThreadDetail = () => {
  const { id } = useParams();
  const [thread, setThread] = useState(null);

  useEffect(() => {
    fetchThreadById(id)
      .then(res => setThread(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const addReply = updatedThread => {
    setThread(updatedThread);
  };

  if (!thread) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <Link to="/forum" className="text-blue-600 hover:underline">← Back to Forum</Link>
      <div className="mt-4">
        <ForumThread
          title={thread.title}
          author={thread.author}
          replies={thread.replies.length}
          createdAt={thread.createdAt}
        />
        <p className="mt-2 text-gray-800">{thread.content}</p>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Replies</h3>
        <ReplyForm threadId={id} onNewReply={addReply} />
        <div className="space-y-4 mt-4">
          {thread.replies.map((r, idx) => (
            <Reply
              key={idx}
              author={r.author}
              content={r.content}
              createdAt={r.createdAt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThreadDetail;