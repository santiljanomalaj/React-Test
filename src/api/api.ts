import axios from 'axios';
import { API_URL } from '../constants/application';
console.log(API_URL)

axios.defaults.baseURL = API_URL;

export default axios;
export { API_URL };