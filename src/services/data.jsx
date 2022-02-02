export async function getVillagers() {
  const resp = await fetch('https://acnhapi.com/v1/villagers/');
  const data = resp.json();
  return data;
}

export async function getVillagerDetails(id) {
  const resp = await fetch(`https://acnhapi.com/v1/villagers/${id}`);
  const data = resp.json();
  return data;
}
