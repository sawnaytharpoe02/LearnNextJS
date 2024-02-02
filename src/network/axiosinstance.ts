import axios from 'axios';

const axiosInstace = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  timeout: 5000,
});


export default axiosInstace;