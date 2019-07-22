import React, { useState, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';

import api from '../../services/api';
import { Container, Header, List, ListItem, Button } from './styles';

import getRandomNumber from '../../components/randomNumber/index';

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

  // Verifica chave "totalPlanet" no LocalStorage, se houver dado, atualiza
  //  estado, se não houver, seta valor padrão.
  useEffect(() => {
    const storageTotalPlanets = localStorage.getItem('totalPlanets');

    if (storageTotalPlanets) {
      setTotalPlanets(JSON.parse(storageTotalPlanets));
    } else {
      localStorage.setItem('totalPlanets', JSON.stringify(totalPlanets));
    }
  }, [totalPlanets]);

  // Verifica chave "Planet" no LocalStorage, se houver dado, carrega na tela
  useEffect(() => {
    const storagePlanet = localStorage.getItem('planet');

    if (storagePlanet) {
      setPlanet(JSON.parse(storagePlanet));
    }
  }, []);

  //  Consulta API com número aleatório e armazena com setPlanet
  async function handleNext() {
    setLoading(true);

    const response = await api.get(`/${getRandomNumber(totalPlanets)}/`);
    const data = {
      climate: response.data.climate,
      name: response.data.name,
      population: response.data.population,
      terrain: response.data.terrain,
      films: response.data.films.length,
    };
    setPlanet(data);
    setLoading(false);
    localStorage.setItem('planet', JSON.stringify(data));
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
