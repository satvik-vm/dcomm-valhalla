import axios from 'axios.js';

export default axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
});
