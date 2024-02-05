// frontend/src/pages/PetSearch.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PetSearch = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/pets')
      .then(response => setPets(response.data))
      .catch(error => console.error('Error fetching pets:', error));
  }, []);

  return (
    <div>
      <h2>Pet Search</h2>
      <ul>
        {pets.map(pet => (
          <li key={pet._id}>{pet.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PetSearch;
