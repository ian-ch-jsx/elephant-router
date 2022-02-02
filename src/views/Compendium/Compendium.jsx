import React from 'react';
import { useState, useEffect } from 'react';
import VillagerList from '../../components/VillagerList/VillagerList';
import { getVillagers } from '../../services/data';

export default function Compendium() {
  const [loading, setLoading] = useState(true);
  const [villagers, setVillagers] = useState([]);

  useEffect(() => {
    let timer;
    const fetchData = async () => {
      const data = await getVillagers();
      console.log(data);
      setVillagers(data);
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
      <VillagerList
        villagers={villagers}
        setVillagers={setVillagers}
        loading={loading}
        setLoading={setLoading}
      />
    </>
  );
}
