import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/';
import PokemonDetail from '../../components/PokemonDetail/PokemonDetail';
import { getPokemon } from '../../services/data';

export default function Pokemon() {
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const { _id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const pokemonDetails = await getPokemon(_id);
      console.log('Pokemon', pokemonDetails);
      setPokemonDetails(pokemonDetails.results);
    };
    fetchData();
  }, []);

  if (!_id) {
    return <h1>error</h1>;
  }

  return (
    <div>
      <PokemonDetail pokemonDetails={pokemonDetails} setPokemonDetails={setPokemonDetails} />
    </div>
  );
}
