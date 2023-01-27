import axios from 'api/axios';

export const PlansService = {
  async getAll() {
    return axios.get('/plans');
  },
};
