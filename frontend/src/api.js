import axios from 'axios';

class API {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:3333',
    });
  }
}

const api = new API();

export { api };
