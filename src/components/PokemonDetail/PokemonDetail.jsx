import React from 'react';
import './PokemonDetail.css';

export default function pokemonDetail({ pokemonDetails }) {
  return (
    <div className="pokemon-details">
      <span>
        <h1>{pokemonDetails.pokemon}</h1>
        <p>{pokemonDetails.hp} HP</p>
        <p>
          Attack: {pokemonDetails.attack} | Defense: {pokemonDetails.defense}
        </p>
        <h2>abilities:</h2>
        <p>
          {pokemonDetails.ability_1} | {pokemonDetails.ability_2}
        </p>
        <a href={pokemonDetails.pokedex}>Pokedex Entry</a>
      </span>
      <img src={pokemonDetails.url_image} />
    </div>
  );
}
