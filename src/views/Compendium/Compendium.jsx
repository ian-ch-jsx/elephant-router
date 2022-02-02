import React from 'react';
import { useState, useEffect } from 'react';
import PokemonList from '../../components/PokemonList/PokemonList';
import { getPokemon } from '../../services/data';

export default function Compendium() {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    let timer;
    const fetchData = async () => {
      const data = await getPokemon();
      setPokemon(data.results);
      timer = setTimeout(() => {
        setLoading(false);
      }, 400);
    };
    if (loading) {
      fetchData();
    }
    return () => {
      clearInterval(timer);
    };
  }, [loading]);
  if (loading)
    return (
      <div className="loading-div">
        <h1>loading...</h1>
      </div>
    );
  return (
    <>
      <PokemonList pokemon={pokemon} setPokemon={setPokemon} />
    </>
  );
}
