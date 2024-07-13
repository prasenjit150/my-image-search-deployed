import axios from 'axios';

const API_URL = 'https://simple-pexels-proxy.onrender.com/search';

export const fetchImages = async (query: string, page: number, perPage: number) => {
  const response = await axios.get(API_URL, {
    params: {
      query,
      page,
      per_page: perPage,
    },
  });
  return response.data;
};
