import axios from 'axios';
import APIError from './errors/APIError';

class API {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:3333',
    });
  }

  setDefaultHeader(headerKey, value) {
    this.api.defaults.headers.common[headerKey] = value;
  }

  unsetDefaultHeader(headerKey) {
    this.api.defaults.headers.common[headerKey] = null;
  }

  async validateToken(token) {
    try {
      const { data: { user } } = await this.api.post('/auth/validate', { token });

      return { user };
    } catch (err) {
      throw new APIError(err);
    }
  }

  async registerUser({
    name, email, password, confirmPassword,
  }) {
    try {
      const { data: { user, token } } = await this.api.post('auth/register', {
        name, email, password, confirmPassword,
      });

      return { user, token };
    } catch (err) {
      throw new APIError(err);
    }
  }

  async login({ email, password }) {
    try {
      const { data: { user, token } } = await this.api.post('/auth', { email, password });

      return { user, token };
    } catch (err) {
      throw new APIError(err);
    }
  }
}

const api = new API();

export { api };
