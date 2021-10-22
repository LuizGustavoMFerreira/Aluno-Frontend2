import axios from 'axios';

const api = axios.create({
  baseURL: 'https://aluno--backend.herokuapp.com'
})

export default api;