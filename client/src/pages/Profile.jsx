import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { fetchStories, fetchThreads } from '../api';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [stories, setStories] = useState([]);
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    setLoading(true);
    Promise.all([fetchStories(), fetchThreads()])
      .then(([storiesRes, threadsRes]) => {
        const authoredStories = storiesRes.data.filter(
          s => s.author === user.email
        );
        const authoredThreads = threadsRes.data.filter(
          t => t.author === user.email
        );
        setStories(authoredStories);
        setThreads(authoredThreads);
      })
      .finally(() => setLoading(false));
  }, [user]);

  if (!user) return <p className="p-6 text-center text-red-500">Please log in to view your profile.</p>;
  if (loading) return <p className="p-6 text-center text-blue-500">Loading your contributions…</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-3xl border border-gray-200">
        <h2 className="text-3xl font-bold text-blue-600 mb-4 text-center">
          👋 Welcome, {user.displayName || user.email}
        </h2>
        <p className="text-gray-600 mb-8 text-center">
          Here's a look at your contributions to TravelConnect.
        </p>

        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-green-600 mb-3 flex items-center gap-2">
            📖 Your Stories
          </h3>
          {stories.length === 0 ? (
            <p className="text-gray-500">You haven’t submitted any stories yet.</p>
          ) : (
            <ul className="space-y-2">
              {stories.map(s => (
                <li key={s._id}>
                  <Link
                    to={`/stories/${s._id}`}
                    className="block bg-blue-100 hover:bg-blue-200 text-blue-800 px-4 py-2 rounded-lg transition"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-purple-600 mb-3 flex items-center gap-2">
            💬 Your Threads
          </h3>
          {threads.length === 0 ? (
            <p className="text-gray-500">You haven’t started any threads yet.</p>
          ) : (
            <ul className="space-y-2">
              {threads.map(t => (
                <li key={t._id}>
                  <Link
                    to={`/forum/${t._id}`}
                    className="block bg-green-100 hover:bg-green-200 text-green-800 px-4 py-2 rounded-lg transition"
                  >
                    {t.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
};

export default Profile;