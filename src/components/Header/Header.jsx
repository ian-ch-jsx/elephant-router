import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <h1>
        <Link to={'/'} data-testid="header">
          Animal Crossing Villagers
        </Link>
      </h1>
    </div>
  );
}
