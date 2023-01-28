import axios from 'api/axios';

export const PlansService = {
  async getAll(_sort = 'date', _order: 'asc' | 'desc' = 'desc') {
    return axios.get('/plans', {
      params: {
        _sort,
        _order,
      },
    });
  },
};
