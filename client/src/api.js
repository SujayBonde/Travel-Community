// client/src/api.js

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// ─── STORIES ────────────────────────────────────────────────────────────

// Fetch all stories
export const fetchStories = () => api.get("/stories");

// Fetch stories for a specific user
export const fetchUserStories = (email) =>
  api.get(`/stories/user/${encodeURIComponent(email)}`);

// Create a new story (supports image upload)
export const createStory = (formData) =>
  api.post("/stories", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

// ─── THREADS ────────────────────────────────────────────────────────────

// Fetch all threads
export const fetchThreads = () => api.get("/threads");

// Fetch a single thread by ID (with its replies)
export const fetchThreadById = (id) => api.get(`/threads/${id}`);

// Fetch threads for a specific user
export const fetchUserThreads = (email) =>
  api.get(`/threads/user/${encodeURIComponent(email)}`);

// Create a new thread
export const createThread = (data) => api.post("/threads", data);

// Post a reply to an existing thread
export const postReply = (threadId, data) =>
  api.post(`/threads/${threadId}/replies`, data);

export const createStoryWithUrl = (data) => api.post("/stories/url", data);
