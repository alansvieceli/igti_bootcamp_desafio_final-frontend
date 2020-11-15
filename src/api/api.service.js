import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

async function getTransaction(date) {
  const res = await axios.get(`${API_URL}?period=${date}`);

  const trans = res.data;
  trans.sort((a, b) => a.day > b.day);
  return res.data;
}

export { getTransaction };
