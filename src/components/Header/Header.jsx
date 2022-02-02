import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <Link to={'/'}>
        <h1>Animal Crossing Villagers</h1>
      </Link>
    </div>
  );
}
