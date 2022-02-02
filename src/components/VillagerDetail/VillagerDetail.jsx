import React from 'react';
import './VillagerDetail.css';

export default function VillagerDetail({ villagerDetails }) {
  return (
    <div className="pokemon-details">
      <span>
        {/* <h1>{villagerDetails.name.name - USen}</h1> */}
        <p>{villagerDetails.species}</p>
        <p>{/* <i>{villagerDetails.catch - phrase}</i> */}</p>
        <p>
          Birthday: {villagerDetails.birthday} | Personality: {villagerDetails.personality}
        </p>
      </span>
      <img src={villagerDetails.image_uri} />
    </div>
  );
}