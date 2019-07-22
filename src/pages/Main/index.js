import React, { useState, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';

import api from '../../services/api';
import { Container, Header, List, ListItem, Button } from './styles';

export default function Main() {
  const [totalPlanets, setTotalPlanets] = useState(61);
  const [loading, setLoading] = useState(false);
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
  //  Consulta API com número aleatório e armazena com setPlanet
  async function handleNext() {
    setLoading(true);
    const response = await api.get(`/${getRandomNumber()}`);
    const data = {
      climate: response.data.climate,
      name: response.data.name,
      population: response.data.population,
      terrain: response.data.terrain,
      films: response.data.films.length,
    };
    setPlanet(data);
    setLoading(false);
  }

  return (
    <>
      <Container>
        <Header>{planet.name}</Header>
        <List>
          <ListItem>
            <strong>Population: </strong>
            {planet.population}
          </ListItem>
          <ListItem>
            <strong>Climate: </strong>
            {planet.climate}
          </ListItem>
          <ListItem>
            <strong>Terrain: </strong>
            {planet.terrain}
          </ListItem>
        </List>
        <footer>
          Featured in {planet.films} {planet.films === 1 ? 'film' : 'films'}
        </footer>
      </Container>
      <Button loading={loading} onClick={handleNext}>
        {loading ? <FaSpinner size="14px" /> : 'Next'}
      </Button>
    </>
  );
}
