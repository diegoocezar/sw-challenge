import axios from 'axios';

const api = axios.create({
  baseURL: 'https://swapi.co/api/planets',
});

export default api;
