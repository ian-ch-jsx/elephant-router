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
    let timer;
    const fetchData = async () => {
      const villagerDetails = await getVillagerDetails(id);
      setVillagerDetails(villagerDetails);
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
  }, [id, loading]);

  if (loading)
    return (
      <div className="loading-div">
        <h1>loading...</h1>
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
