import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom/';
import VillagerDetail from '../../components/VillagerDetail/VillagerDetail';
import { getVillagerDetails } from '../../services/data';
import './Villager.css';

export default function Villager() {
  const [villagerDetails, setVillagerDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const villagerDetails = await getVillagerDetails(id);
      setVillagerDetails(villagerDetails);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading)
    return (
      <div className="loading-div">
        <h1>loading...</h1>
        <button onClick={backButton}>Return home</button>
      </div>
    );

  function backButton() {
    history.push('/');
  }

  return (
    <div className="detail-container">
      <VillagerDetail villagerDetails={villagerDetails} setVillagerDetails={setVillagerDetails} />
      <button onClick={backButton}>Return home</button>
    </div>
  );
}
