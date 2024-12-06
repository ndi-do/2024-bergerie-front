import React from 'react';
import './theme-toggle.css';

interface ThemeToggleProps {
  toggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ toggle }) => {
  return (
    <button className="theme-toggle" onClick={toggle}>
      🌓
    </button>
  );
};

export default ThemeToggle;
