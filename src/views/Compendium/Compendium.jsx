import React from 'react';
import { useState, useEffect } from 'react';
import VillagerList from '../../components/VillagerList/VillagerList';
import { getVillagers } from '../../services/data';

export default function Compendium() {
  const [loading, setLoading] = useState(true);
  const [villagers, setVillagers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getVillagers();
      setVillagers(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading)
    return (
      <div className="loading-div">
        <h1>loading...</h1>
      </div>
    );
  return (
    <>
      <VillagerList
        villagers={villagers}
        setVillagers={setVillagers}
        loading={loading}
        setLoading={setLoading}
      />
    </>
  );
}
