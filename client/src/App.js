// client/src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import ProtectedRoute from './context/ProtectedRoute';

import Home from './pages/Home';
import Stories from './pages/Stories';
import SubmitStory from './pages/SubmitStory';
import Forum from './pages/Forum';
import ThreadDetail from './pages/ThreadDetail';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/forum/:id" element={<ThreadDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes */}
          <Route
            path="/submit"
            element={
              <ProtectedRoute>
                <SubmitStory />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;