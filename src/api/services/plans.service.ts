import axios from 'api/axios';
import { IPlan } from 'models/IPlan';
import { ITask } from 'models/ITask';

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

  async create(plan: IPlan) {
    return axios.post(url, plan);
  },

  async updatePlan(id: number, plan: IPlan) {
    return axios.put(`${url}/${id}`, plan);
  },

  async createTask(planId: number, tasks: ITask[]) {
    return axios.patch(`${url}/${planId}`, { tasks });
  },
};
