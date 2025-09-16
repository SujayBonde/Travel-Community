import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Navbar = () => {
  const [isMobileOpen, setMobileOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleMenu = () => setMobileOpen(!isMobileOpen);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold tracking-wide flex items-center gap-2">
          TravelConnect <span className="text-xl">🌍</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center font-medium">
          <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link to="/stories" className="hover:text-yellow-300 transition">Stories</Link>
          <Link to="/forum" className="hover:text-yellow-300 transition">Forum</Link>

          {user ? (
            <>
              <Link to="/profile" className="hover:text-yellow-300 transition">Profile</Link>
              <button
                onClick={handleLogout}
                className="bg-white text-blue-700 px-4 py-1 rounded-full hover:bg-yellow-300 hover:text-blue-900 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-white text-blue-700 px-4 py-1 rounded-full hover:bg-yellow-300 hover:text-blue-900 transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-white text-blue-700 px-4 py-1 rounded-full hover:bg-yellow-300 hover:text-blue-900 transition"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Links */}
      {isMobileOpen && (
        <div className="md:hidden bg-blue-600 px-6 pb-4 animate-slide-down">
          <Link to="/" className="block py-2 hover:text-yellow-300" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link to="/stories" className="block py-2 hover:text-yellow-300" onClick={() => setMobileOpen(false)}>Stories</Link>
          <Link to="/forum" className="block py-2 hover:text-yellow-300" onClick={() => setMobileOpen(false)}>Forum</Link>

          {user ? (
            <>
              <Link to="/profile" className="block py-2 hover:text-yellow-300" onClick={() => setMobileOpen(false)}>Profile</Link>
              <button
                onClick={() => {
                  handleLogout();
                  setMobileOpen(false);
                }}
                className="block w-full text-left py-2 hover:text-yellow-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="block py-2 hover:text-yellow-300" onClick={() => setMobileOpen(false)}>Login</Link>
              <Link to="/signup" className="block py-2 hover:text-yellow-300" onClick={() => setMobileOpen(false)}>Sign Up</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;