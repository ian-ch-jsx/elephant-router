import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/';
import VillagerDetail from '../../components/VillagerDetail/VillagerDetail';
import useVillagerDetails from '../../context/useVillagers';
import './Villager.css';

export default function Villager() {
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const { villagerDetails } = useVillagerDetails();

  useEffect(() => {
    if (villagerDetails.name) {
      setLoading(false);
    }
  }, [villagerDetails]);

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
      <VillagerDetail villagerDetails={villagerDetails} />
      <button onClick={backButton}>Return home</button>
    </div>
  );
}
