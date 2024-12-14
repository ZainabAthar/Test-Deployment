'use client';

import { useState } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center w-16 h-8 p-1 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full shadow-md transition-all duration-300 ease-in-out"
    >
      {/* Sun Icon */}
      <div className="absolute left-1 w-3 h-3 bg-yellow-400 rounded-full shadow"></div>

      {/* Clouds Icon */}
      <div className="absolute right-1 flex items-center justify-center w-3 h-3 bg-white rounded-full shadow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-2 w-2 text-blue-400"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19 16.998H6c-2.21 0-4-1.79-4-4 0-2.083 1.59-3.788 3.66-3.966C6.17 6.69 8.04 5.99 10 5.99c2.68 0 4.996 1.78 5.665 4.232A3.49 3.49 0 0119 13.498c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5z" />
        </svg>
      </div>

      {/* Toggle Knob */}
      <div
        className={`absolute w-6 h-6 bg-white rounded-full shadow-lg transform transition-transform duration-500 ease-in-out ${
          isDarkMode ? 'translate-x-8' : 'translate-x-0'
        }`}
      ></div>
    </button>
  );
};

export default ThemeToggle;
