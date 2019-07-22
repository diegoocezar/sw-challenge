import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, Button } from './styles';

import api from '../../services/api';
import swLogo from '../../assets/images/star_wars_logo.png';

export default function Home() {
  const [totalPlanets, setTotalPlanets] = useState(61);

  // Verifica total de planetas na API e atualiza o valor inicial
  useEffect(() => {
    async function verifyTotalPlanets() {
      const response = await api.get(`/`);
      const { count } = response.data;
      setTotalPlanets(count);
    }

    verifyTotalPlanets();
  }, []);

  // Salva no LocalStorage a quantidade de planetas atualizada
  useEffect(() => {
    localStorage.setItem('totalPlanets', JSON.stringify(totalPlanets));
  }, [totalPlanets]);

  // Novo Teste

  return (
    <Container>
      <img src={swLogo} alt="Star Wars logo" />
      <strong>Challenge</strong>
      <Link to="/main">
        <Button>Start</Button>
      </Link>
    </Container>
  );
}
