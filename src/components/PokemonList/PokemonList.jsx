import React from 'react';
import './PokemonList.css';

export default function PokemonList({ pokemon }) {
  return (
    <div className="pokemon-list">
      {pokemon.map((poke) => (
        <span className="pokemon-card" key={poke._id}>
          <h3>{poke.pokemon}</h3>
          <img src={poke.url_image} />
        </span>
      ))}
    </div>
  );
}
