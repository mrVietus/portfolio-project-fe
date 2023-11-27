import axios from 'axios';
import PageConfig from '../Config/pageConfig';

const customAxios = axios.create({
    baseURL: PageConfig.BackendBaseUrl,
    timeout: PageConfig.Timeout,
    headers: {
      'Content-Type': 'application/json',
    },
  });

export default function UseAxios() {
    return customAxios;
}
