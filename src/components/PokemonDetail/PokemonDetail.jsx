import React from 'react';

export default function pokemonDetail({ pokemonDetails }) {
  return (
    <div className="pokemon-list">
      {pokemonDetails.map((poke) => (
        <span className="pokemon-card" key={poke._id}>
          <h3>{poke.pokemon}</h3>
          <img src={poke.url_image} />
        </span>
      ))}
    </div>
  );
}
