import React from 'react';
import './VillagerDetail.css';

export default function VillagerDetail({ villagerDetails }) {
  return (
    <div className="villager-details">
      <img src={villagerDetails.image_uri} />
      <span>
        <h1>{villagerDetails.name['name-USen']}</h1>
        <p>{villagerDetails.species}</p>
        <p>{/* <i>{villagerDetails.catch - phrase}</i> */}</p>
        <p>
          Birthday: {villagerDetails.birthday} | Personality: {villagerDetails.personality}
        </p>
      </span>
    </div>
  );
}
