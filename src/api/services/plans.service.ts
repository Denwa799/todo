import axios from 'api/axios';
import { IPlan } from 'models/IPlan';

const url = 'plans';

export const PlansService = {
  async getAll(_sort = 'date', _order: 'asc' | 'desc' = 'desc', filter = {}) {
    return axios.get(url, {
      params: {
        _sort,
        _order,
        ...filter,
      },
    });
  },

  async updatePlan(id: number, plan: IPlan) {
    return axios.put(`${url}/${id}`, plan);
  },
};
