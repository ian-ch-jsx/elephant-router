import React from 'react';

export default function AnimalDetail({ animals }) {
  return (
    <div className="animal-list">
      {animals.map((animal) => (
        <span className="animal-card" key={animal.id}>
          <h3>{animal.name}</h3>
          <h4>{animal.latin_name}</h4>
          <img src={animal.image_link} />
          <p>Found in {animal.geo_range}</p>
          <p>Diet: {animal.diet}.</p>
        </span>
      ))}
    </div>
  );
}
