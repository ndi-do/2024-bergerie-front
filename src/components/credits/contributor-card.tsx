import React from 'react';
import './contributor-page.css';

interface Contributor {
  name: string;
  role: string;
  github: string;
}

const ContributorCard: React.FC<{ contributor: Contributor }> = ({ contributor }) => {
  return (
    <div className="contributor-card">
      <div className="info">
        <h3>{contributor.name}</h3>
        <p>{contributor.role}</p>
        <a href={contributor.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ContributorCard;
