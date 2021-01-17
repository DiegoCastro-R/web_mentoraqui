import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api.mentoraqui.tk/',
});

export default api;
