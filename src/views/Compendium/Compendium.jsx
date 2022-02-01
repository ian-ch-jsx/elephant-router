import React from 'react';
import { useState, useEffect } from 'react';
import AnimalList from '../../components/AnimalList/AnimalList';
import { getAnimals } from '../../services/data';

export default function Compendium() {
  const [loading, setLoading] = useState(true);
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAnimals();
      setAnimals(data);
      console.log(data);
      setLoading(false);
    };
    fetchData();
  }, [loading]);
  if (loading) return <h2>loading...</h2>;
  return (
    <>
      <h1>Animals</h1>
      <AnimalList animals={animals} setAnimals={setAnimals} />
    </>
  );
}
