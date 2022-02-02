import React from 'react';
import { Link } from 'react-router-dom';
import './VillagerList.css';

export default function VillagerList({ villagers }) {
  return (
    <div className="pokemon-list">
      {villagers.map((item) => (
        <span key={item.id}>
          <Link to={`./${item.id}`}>
            <img src={item.icon_uri} />
          </Link>
        </span>
      ))}
    </div>
  );
}
