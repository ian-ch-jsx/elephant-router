export async function getAnimals() {
  const resp = await fetch('https://zoo-animal-api.herokuapp.com/animals/rand/6');
  const data = await resp.json();
  return data;
}
