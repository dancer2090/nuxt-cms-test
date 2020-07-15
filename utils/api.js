import axios from 'axios';
import { async } from 'q';
const API_ROUTE = 'https://demo.wp-api.org/wp-json/';

export const get = async (path) => {
  const res = await axios.get(API_ROUTE);
  return res.data;
}