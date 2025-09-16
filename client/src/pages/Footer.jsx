import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white py-8 mt-1">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold mb-2">TravelConnect</h2>
          <p className="text-sm text-gray-200">
            Built with passion by <span className="text-yellow-300 font-semibold">Sujay</span> ✨
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Explore</h3>
          <ul className="space-y-1 text-gray-300">
            <li><Link to="/" className="hover:text-yellow-300 transition">Home</Link></li>
            <li><Link to="/stories" className="hover:text-yellow-300 transition">Stories</Link></li>
            <li><Link to="/forum" className="hover:text-yellow-300 transition">Forum</Link></li>
            <li><Link to="/submit" className="hover:text-yellow-300 transition">Submit Story</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Connect</h3>
          <div className="flex space-x-4">
            <a href="https://github.com/SujayBonde" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition">
              <i className="fab fa-github text-xl"></i> GitHub
            </a>
            <a href="https://www.linkedin.com/in/sujay-bonde-7a3b95314" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition">
              <i className="fab fa-linkedin text-xl"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 text-center text-sm text-gray-400 border-t border-blue-600 pt-4">
        © {new Date().getFullYear()} TravelConnect by Sujay. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;