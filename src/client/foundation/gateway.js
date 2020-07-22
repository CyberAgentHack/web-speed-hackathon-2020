import axiosMod from 'axios';

const TIMEOUT = 20 * 1000;
const API_ENDPOINT = window.location.origin;

const axios = axiosMod.create({
  baseURL: API_ENDPOINT,
  responseType: 'json',
});

export async function fetch(path) {
  const requestWithTimeout = Promise.race([
    axios.get(path),
    new Promise((resolve) => setTimeout(() => resolve('timeout'), TIMEOUT)),
  ]);
  const res = await requestWithTimeout;

  if (res === 'timeout') {
    throw new Error(`Timeout: ${path}`);
  }

  const payload = res?.data?.data;

  if (!payload || typeof payload !== 'object') {
    throw new Error(`Invalid response for ${path}: ${JSON.stringify(res)}`);
  }

  return payload;
}

export async function post(path, data) {
  const requestWithTimeout = Promise.race([
    axios.post(path, data),
    new Promise((resolve) => setTimeout(() => resolve('timeout'), TIMEOUT)),
  ]);
  const res = await requestWithTimeout;

  if (res.status !== 200) {
    throw new Error(
      `Invalid response for ${path} with ${JSON.stringify(data)}: status ${
        res.status
      }`,
    );
  }

  return res;
}
