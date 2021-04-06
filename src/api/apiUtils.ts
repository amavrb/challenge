import axios from 'axios';

const getHeaders = () => ({
  baseURL: 'https://api.1337co.de/v3',
  headers: {
    Authorization: `api-key ${process.env.REACT_APP_API_KEY}`,
  },
});

export const get = async (url: string) => {
  const { data, status, statusText } = await axios.get(url, getHeaders());
  switch (status) {
    case 200:
      return data;
    default:
      return statusText;
  }
};
