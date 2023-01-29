import axios from 'api/axios';

const url = String(process.env.REACT_APP_NEWS_URL) || '';

export const NewsService = {
  async getAll() {
    return axios.get(url, {
      params: {
        apikey: process.env.REACT_APP_NEWS_API_KEY,
        q: 'Russia',
      },
    });
  },
};
