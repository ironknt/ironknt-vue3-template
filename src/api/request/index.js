import Fly from 'flyio/dist/npm/fly';
import { Dialog } from 'vant';
import { getBaseUrl } from '../apiConfig';

const fly = new Fly();

export const request = ({ url, params, method = 'GET', headers = {}, describe = '', callback }) => {
  const baseUrl = getBaseUrl();
  return new Promise((resolve, reject) => {
    fly
      .request(`${baseUrl}${url}`, params, {
        method,
        headers: {
          'content-type': 'application/json',
          accept: '*/*',
          ...headers,
        },
      })
      .then((data) => {
        resolve(data?.data);
      })
      .catch((e) => {
        Dialog({ message: `请求${describe}失败：${e?.message}` });
        if (callback) callback(e);
        reject(e);
      });
  });
};

export default request;
