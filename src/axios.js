import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://todo-app-154d0.firebaseio.com/',
});

export default instance;
