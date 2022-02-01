export async function getPokemon() {
  const resp = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex?type=dark');
  const data = resp.json();
  return data;
}

export async function getPokemonDetails(_id) {
  const resp = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex/${_id}`);
  const data = resp.json();
  return data;
}
