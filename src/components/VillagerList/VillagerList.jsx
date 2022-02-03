import React from 'react';
import { Link } from 'react-router-dom';
import './VillagerList.css';

export default function VillagerList({ villagers }) {
  return (
    <div className="villager-list">
      {villagers.map((item) => (
        <span key={item.id}>
          <Link to={`./${item.id}`}>
            <img src={item.icon_uri} alt="profile-icon" />
          </Link>
        </span>
      ))}
    </div>
  );
}
