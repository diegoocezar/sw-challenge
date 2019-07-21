import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import { Header, List, ListItem } from './styles';

export default function Main() {
  const [totalPlanets, setTotalPlanets] = useState(61);
  const [planet, setPlanet] = useState({
    climate: 'unknow',
    name: 'Planet name',
    population: 'unknow',
    terrain: 'unknow',
    films: 'N',
  });

  // Verifica total de planetas na API e atualiza o valor inicial
  useEffect(() => {
    async function verifyTotalPlanets() {
      const response = await api.get(`/`);
      const { count } = response.data;
      setTotalPlanets(count);
    }

    verifyTotalPlanets();
  }, []);

  // Gera número aleatório para consulta do planeta
  function getRandomNumber() {
    const min = Math.ceil(1);
    const max = Math.floor(totalPlanets);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <>
      <Header>{planet.name}</Header>
      <List>
        <ListItem>Population: {planet.population}</ListItem>
        <ListItem>Climate: {planet.climate}</ListItem>
        <ListItem>Terrain: {planet.terrain}</ListItem>
        <ListItem>
          Featured in {planet.films} {planet.films === 1 ? 'film' : 'films'}
        </ListItem>
      </List>
    </>
  );
}
