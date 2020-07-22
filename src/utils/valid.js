export const domainReg = /[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/;

export const CDN_URL = 'amibablogstatic-156c5.kxcdn.com';

export const replaceCdnDomain = (url, suffix) => {
  return url.replace(domainReg, CDN_URL) + suffix || '';
};
