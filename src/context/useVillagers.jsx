import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { getVillagerDetails } from '../services/data';

export default function useVillagerDetails() {
  const [villagerDetails, setVillagerDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const villagerDetails = await getVillagerDetails(id);
      setVillagerDetails(villagerDetails);
    };
    fetchData();
  }, [id]);

  return { villagerDetails };
}
