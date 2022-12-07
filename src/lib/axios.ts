import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: `Bearer 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`,
  },
});
