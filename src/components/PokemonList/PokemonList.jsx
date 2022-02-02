import React from 'react';
import { Link } from 'react-router-dom';
import './PokemonList.css';

export default function PokemonList({ pokemon }) {
  return (
    <div className="pokemon-list">
      {pokemon.map((poke) => (
        <span key={poke._id}>
          <Link to={`./${poke._id}`}>
            <img src={poke.url_image} />
          </Link>
        </span>
      ))}
    </div>
  );
}
