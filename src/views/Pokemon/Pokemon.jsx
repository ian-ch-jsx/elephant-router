import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom/';
import PokemonDetail from '../../components/PokemonDetail/PokemonDetail';
import { getPokemonDetails } from '../../services/data';
import './Pokemon.css';

export default function Pokemon() {
  const [pokemonDetails, setPokemonDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const { _id } = useParams();
  const history = useHistory();

  useEffect(() => {
    let timer;
    const fetchData = async () => {
      const pokemonDetails = await getPokemonDetails(_id);
      setPokemonDetails(pokemonDetails);
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
  }, [_id]);

  if (loading)
    return (
      <div className="loading-div">
        <h1>loading..</h1>
      </div>
    );

  function backButton() {
    history.push('/');
  }

  return (
    <div className="detail-container">
      <PokemonDetail pokemonDetails={pokemonDetails} setPokemonDetails={setPokemonDetails} />
      <button onClick={backButton}>Return home</button>
    </div>
  );
}
