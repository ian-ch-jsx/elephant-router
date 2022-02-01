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
      console.log(data.results);
      timer = setTimeout(() => {
        setLoading(false);
      }, 500);
    };
    if (loading) {
      fetchData();
    }
    return () => {
      clearInterval(timer);
    };
  }, [loading]);
  if (loading) return <h2>loading...</h2>;
  return (
    <>
      <PokemonList pokemon={pokemon} setPokemon={setPokemon} />
    </>
  );
}
