import React from 'react';
import './AnimalList.css';

export default function AnimalList({ animals }) {
  return (
    <div className="animal-list">
      {animals.map((animal) => (
        <span className="animal-card" key={animal.id}>
          <h3>{animal.name}</h3>
          <img src={animal.image_link} />
        </span>
      ))}
    </div>
  );
}
