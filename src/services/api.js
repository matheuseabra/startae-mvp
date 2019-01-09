import axios from 'axios';

const api = axios.create({ baseURL: 'https://gist.githubusercontent.com/sales/f961f967c6668c7c1c3ed565e3bf94e8/raw/71168b72d9a3a199bd1de01026b5031875f6d432'});

export default api;