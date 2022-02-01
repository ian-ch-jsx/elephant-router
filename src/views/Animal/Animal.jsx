// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom/';
// import AnimalDetail from '../../components/AnimalDetail/AnimalDetail';
// import { getAnimals } from '../../services/data';

// export default function Animal() {
//   const [animals, setAnimals] = useState([]);
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchData = async () => {
//       const animalDetails = await getAnimals(id);
//       console.log('animals', animalDetails);
//       setAnimals(animalDetails);
//     };
//     fetchData();
//   }, []);

//   if (!id) {
//     return <h1>error</h1>;
//   }

//   return (
//     <div>
//       <AnimalDetail animals={animals} setAnimals={setAnimals} />
//     </div>
//   );
// }
