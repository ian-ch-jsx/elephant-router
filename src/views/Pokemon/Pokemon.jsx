import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom/';
import PokemonDetail from '../../components/PokemonDetail/PokemonDetail';
import { getPokemonDetails } from '../../services/data';

export default function Pokemon() {
  const [pokemonDetails, setPokemonDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const { _id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const pokemonDetails = await getPokemonDetails(_id);
      setPokemonDetails(pokemonDetails);
      setLoading(false);
    };
    fetchData();
  }, [_id]);

  if (loading) return <h1>Loading</h1>;

  function backButton() {
    history.push('/');
  }

  return (
    <div>
      <PokemonDetail pokemonDetails={pokemonDetails} setPokemonDetails={setPokemonDetails} />
      <button onClick={backButton}>Return home</button>
    </div>
  );
}
