let baseUrl = '';

export const getBaseUrl = () => {
  return baseUrl;
};

export const setBaseUrl = (url) => {
  baseUrl = url;
}

export default { getBaseUrl, setBaseUrl, };
